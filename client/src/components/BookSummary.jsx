import { useLocation } from "react-router-dom";
import styled from "styled-components";

// import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';

const BookSummary = ({ props }) => {
    // const { author, cover, title } = useLocation("state");
    // const { author, cover, title } = useLocation("state");
    return (
        <StyledBookPlaceholder>
            <div
                id="details"
                className="book"
            >
                <div className="thumbnail">
                    <BookSummary.CoverImage imageSrc={props.cover} />
                </div>
                <div className="titleAndAuthor">
                    <p className="title">{props.title}</p>
                    <p className="author">{props.author}</p>
                </div>
            </div>
        </StyledBookPlaceholder>
    );
};

BookSummary.CoverImage = ({ imageSrc }) => {
    return (
        <CoverImageWrapper>
            <img
                src={imageSrc}
                alt="book cover"
            />
        </CoverImageWrapper>
    );
};

const StyledBookPlaceholder = styled.div`
    height: 266px;
    min-height: 266px;
    width: var(--book-width);
    margin: var(--half-of-grid-gap) auto;

    .book {
        height: 100%;
        width: var(--book-width);
        background-color: #fff;
        box-shadow: 0px 0px 0px 1px var(--light-gray-100);
        border-radius: 4px;
        padding-block-start: 30px;
        transition: all 0.25s ease-in;

        &:has(~ &:hover) {
            // opacity: 0.5;
            background-color: blue;
        }

        & .titleAndAuthor {
            text-align: center;
            color: var(--color-text-dark);
            padding-inline: 10px;
            margin-block-start: 10px;
        }
        & .titleAndAuthor p {
            margin: 0;
            text-overflow: ellipsis;
            overflow-x: hidden;
        }
        & .title {
            font-size: 14px;
            line-height: 17.92px;
            font-weight: 500;
        }
        & .author {
            font-size: 13px;
            line-height: 16.64px;
            font-weight: 300;
        }
        & .thumbnail {
            display: flex;
            justify-content: center;
        }
    }

    .book:hover {
        cursor: pointer;
        box-shadow: 0px 1px 5px 2px var(--light-gray-100);
        transform: scale(1.1);
        transition: transform 0.25s ease-in;
    }

    a {
        text-decoration: none;
    }

    @media screen and (min-width: 768px) {
        width: var(--placholder-width);
        padding: var(--half-of-grid-gap);
        margin: unset;
    }
`;

const CoverImageWrapper = styled.div`
    width: 100px;
    height: 150px;

    img {
        width: 100px;
    }
`;

export default BookSummary;
