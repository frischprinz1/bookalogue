import GlobalNav from "../components/GlobalNav";
import PageHeader from "../components/PageHeader";
import BookShowcase from "../components/BookShowcase";
import { Outlet, useRouteLoaderData } from "react-router-dom";
import { BooksContext } from "../components/Contexts";

const DisplayBooks = () => {
    const books = useRouteLoaderData("root");

    return (
        <>
            <GlobalNav />
            <PageHeader
                pageTitle={"Best Sellers"}
                buttonText={"Add Book"}
            />

            <BooksContext.Provider value={books}>
                <BookShowcase />
                <Outlet />
            </BooksContext.Provider>
        </>
    );
};

// http://localhost:5173/books/bookDetail/982347s8-5s2d-950a-7a80-23423s89k82s

export default DisplayBooks;
