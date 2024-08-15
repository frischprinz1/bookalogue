import styled from "styled-components";
import {
    Link,
    useParams,
    useRouteLoaderData,
    useLocation,
} from "react-router-dom";
import Button from "./Button";
import TextInfo from "./TextInfo";
import CoverImage from "./CoverImage";
import { Cross2Icon } from "@radix-ui/react-icons";
import DeleteBookDialog from "./DeleteBook";

const BookDetail = () => {
    const loc = useLocation();
    const title = "Book Details";
    const getBook = () => {
        const bookId = useParams().bookId;
        const books = useRouteLoaderData("root");

        return books?.filter((book) => book.id === bookId);
    };
    const [book] = getBook();

    return (
        <ModalWrapper>
            <BookDetail.Header>
                <div className="title">{title}</div>
                <div className="close-btn">
                    <Link to={"/"}>
                        <Cross2Icon />
                    </Link>
                </div>
            </BookDetail.Header>
            <BookDetail.Content book={book} />
            <BookDetail.Actions bookId={book.id} />
        </ModalWrapper>
    );
};
BookDetail.Header = ({ children }) => {
    return <ModalHeader>{children}</ModalHeader>;
};

BookDetail.Content = ({ book }) => {
    return (
        <ModalContent>
            <BookDetail.CoverImage imageSrc={book.cover} />
            <BookDetail.TextInfo
                author={book.author}
                title={book.title}
                genres={book.genres}
            />
        </ModalContent>
    );
};
BookDetail.Actions = ({ bookId }) => {
    const loc = useLocation();
    return (
        <ModalActions>
            <p className="action">
                <DeleteBookDialog bookId={bookId}>Remove Book</DeleteBookDialog>
            </p>
            <Link to={`../${bookId}/edit`}>
                <ModalButton>Edit Book</ModalButton>
            </Link>
        </ModalActions>
    );
};

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 100%;
    width: 100%;
    border: 1px solid var(--light-gray-100);
    background-color: #fff;

    @media screen and (min-width: 768px) {
        height: 612px;
        width: 680px;
        margin: 0 auto;
        border-radius: 5px;
    }
`;

const ModalFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 30px;
    width: 100%;
`;

const ModalHeader = styled(ModalFlex)`
    border-bottom: 1px solid var(--light-gray-100);
    height: 50px;

    & .title {
        font-size: 16px;
        font-weight: 500;
        line-height: 19.2px;
        color: #1d2b36;
    }

    .close-btn {
        color: #93a1b0;
        cursor: pointer;
    }
`;

const ModalContent = styled(ModalFlex)`
    justify-content: center;
    padding-block: 44px;
    height: 450px;
`;
const ModalActions = styled(ModalFlex)`
    font-weight: 400;
    font-size: 14px;
    line-height: 17.92px;

    a {
        color: #556575;
        cursor: pointer;
    }
    a:hover {
        text-decoration: underline;
    }
`;
const ModalButton = styled(Button)`
    width: 200px;
`;

BookDetail.CoverImage = CoverImage;
BookDetail.TextInfo = TextInfo;
export default BookDetail;
