import React from "react";
import ReactDOM from "react-dom/client";
import DisplayBooks from "./pages/DisplayBooks.jsx";
import BookDetail from "./components/BookDetail.jsx";
import "./index.css";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import BookDetailDialog from "./components/BookDetailDialog.jsx";
import AddBook from "./pages/AddBook.jsx";
import EditBook from "./pages/EditBook.jsx";
import PageLayout from "./components/PageLayout.jsx";
import DeleteBookDialog from "./components/DeleteBook.jsx";

const API_URL = "http://localhost:5000/api/books";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        id: "root",
        loader: async ({ request, params }) => {
            try {
                const response = await fetch(API_URL);
                const books = await response.json();

                return books;
            } catch (err) {
                console.log("Could not fetch books", err.message);
            }
        },

        // // performing this mutation when data is submitted to it
        // action: async ({ request }) => {
        //     return updateFakeTeam(await request.formData());
        // },

        // and renders this element in case something went wrong
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: (
                    <Navigate
                        replace
                        to="books"
                    />
                ),
            },
            {
                path: "books",
                element: <DisplayBooks />,
                children: [
                    {
                        path: "bookDetail/:bookId",
                        element: <BookDetailDialog />,
                    },
                ],
            },
            {
                path: "books/add",
                element: <AddBook />,
            },
            {
                path: "books/:bookId/edit",
                element: <EditBook />,
            },
            {
                path: "books/:bookId/remove",
                element: <DeleteBookDialog>Remove Book</DeleteBookDialog>,
            },
            // {
            //     path: "books/:bookId",
            //     element: <BookDetailDialog />,
            // },
        ],
    },
    // {
    //     path: "books/:bookId",
    //     element: <BookDetail />,
    //     // loader: async ({ request, params }) => {
    //     //     const API_URL = "http://localhost:5000/api/books";
    //     //     const response = await fetch(`${API_URL}/${params.bookId}`, {
    //     //         signal: request.signal,
    //     //     });
    //     //     return await response.json();
    //     // },
    //     errorElement: <ErrorBoundary />,
    // },
    // {
    //     path: "books/edit/:bookId",
    //     element: <EditBook />,
    //     loader: async ({ request, params }) => {
    //         const API_URL = "http://localhost:5000/api/books";
    //         const response = await fetch(`${API_URL}/${params.bookId}`, {
    //             signal: request.signal,
    //         });
    //         return await response.json();
    //     },
    //     errorElement: <ErrorBoundary />,
    // },
    // {
    //     path: "books/add",
    //     element: <AddBook />,

    //     errorElement: <ErrorBoundary />,
    // },
    // // {
    // //     path: "books/remove/:bookId",
    // //     element: <BookRemoval />,
    // //     loader: async ({ request, params }) => {
    // //         const API_URL = "http://localhost:5000/api/books";
    // //         const response = await fetch(`${API_URL}/${params.bookId}`, {
    // //             signal: request.signal,
    // //         });
    // //         return await response.json();
    // //     },
    // //     errorElement: <ErrorBoundary />,
    // // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
