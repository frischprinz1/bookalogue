import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BookSummary from "./BookSummary";
import BookDetailDialog from "./BookDetailDialog";
import { BooksContext } from "../components/Contexts";
import { useContext } from "react";

const BookShowcase = () => {
    const books = useContext(BooksContext);

    return (
        <StyledBookShowcase>
            {books.length > 0 ? (
                books.map((book) => (
                    <Link
                        // to={`${book.id}`}
                        to={`bookDetail/${book.id}`}
                        key={book.id}
                        state={{ fromGrid: true }}
                    >
                        <BookSummary props={book} />
                    </Link>

                    // <BookDetailDialog
                    //     bookId={book.id}
                    //     key={book.id}
                    // >
                    //     <BookSummary props={book} />
                    // </BookDetailDialog>
                ))
            ) : (
                <>No books found!</>
            )}
        </StyledBookShowcase>
    );
};

const StyledBookShowcase = styled.section`
    display: block;
    width: var(--page-width-sm);
    margin-block-start: 7.5px;

    a {
        text-decoration: none;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        width: var(--page-width);
    }
`;

export default BookShowcase;
