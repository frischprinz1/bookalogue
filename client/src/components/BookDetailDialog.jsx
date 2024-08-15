import * as Dialog from "@radix-ui/react-dialog";
import styled, { keyframes } from "styled-components";
import { Cross2Icon } from "@radix-ui/react-icons";
import BookDetail from "./BookDetail";
import { BooksContext } from "../components/Contexts";
import { useContext, useState } from "react";
import { useLocation, Link, useParams, useNavigate } from "react-router-dom";

const BookDetailDialog = ({ children }) => {
    const title = "Book Details";
    const navigate = useNavigate();
    const getBook = () => {
        const books = useContext(BooksContext);
        return books?.filter((book) => book.id === useParams().bookId);
    };

    const [open, setOpen] = useState(true);
    const [book] = getBook();

    return (
        <Dialog.Root
            open={open}
            onOpenChange={(open) => {
                setOpen(open);
                navigate("..");
            }}
        >
            <DialogTrigger asChild>
                <div>{children}</div>
            </DialogTrigger>
            <Dialog.Portal onClick={() => console.log("clicked the portal")}>
                <DialogOverlay />
                <DialogContent aria-describedby={undefined}>
                    <DialogTitle>
                        <BookDetail.Header>
                            <div className="title">{title}</div>
                            <DialogClose
                                className="close-btn"
                                asChild
                            >
                                <div
                                    className="IconButton"
                                    aria-label="Close"
                                >
                                    <Link to={".."}>
                                        <Cross2Icon />
                                    </Link>
                                </div>
                            </DialogClose>
                        </BookDetail.Header>
                    </DialogTitle>

                    <BookDetail.Content book={book} />
                    <BookDetail.Actions bookId={book.id} />
                </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

const overlayShow = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;
const DialogTrigger = styled(Dialog.Trigger)`
    all: unset;
`;
const DialogOverlay = styled(Dialog.Overlay)`
    background-color: rgba(3, 64, 119, 0.8);
    position: fixed;
    inset: 0;
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;
const DialogTitle = styled(Dialog.Title)`
    margin: 0;
`;
const DialogClose = styled(Dialog.Close)`
    all: unset;
`;
const DialogContent = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
        hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
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

    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;
// const DialogCancel = styled(Dialog.Cancel)`
//     width: 123px;
//     height: 40px;
//     border-radius: 3px;
//     border: none;
//     padding-block: 0px;
//     background-color: var(--cobalt-blue);
//     font-size: 14px;
//     line-height: 17px;
//     text-align: center;
//     cursor: pointer;

//     background: none;
//     margin-inline-end: 15px;
//     color: #405261;
//     border: 1px solid var(--light-gray-200);
// `;

// const DialogAction = styled(Dialog.Action)`
//     width: 123px;
//     height: 40px;
//     border-radius: 3px;
//     border: none;
//     padding-block: 0px;
//     background-color: var(--cobalt-blue);
//     font-size: 14px;
//     line-height: 17px;
//     text-align: center;
//     color: #fff;
//     cursor: pointer;
// `;

// const DialogDescription = styled(Dialog.Description)`
//     margin-bottom: 20px;
//     font-size: 18px;
//     font-weight: 500;
//     line-height: 21.6px;
//     color: #1d2b36;
//     text-align: center;
// `;

// const DialogTitle = styled(ModalFlex)`
//     // border-bottom: 1px solid var(--light-gray-100);
//     // height: 50px;

//     // & .title {
//     //     font-size: 16px;
//     //     font-weight: 500;
//     //     line-height: 19.2px;
//     //     color: #1d2b36;
//     // }

//     // .close-btn {
//     //     width: 24px;
//     //     height: 24px;
//     //     color: #93a1b0;
//     // }
// `;

export default BookDetailDialog;
