import { useParams, useRouteLoaderData } from "react-router-dom";
import Form from "../components/Form";
import GlobalNav from "../components/GlobalNav";
import SuccessAlert from "../components/SuccessAlert";
import { useState } from "react";

const EditBook = () => {
    const [status, setStatus] = useState(false);

    const bookId = useParams().bookId;
    const pageTitle = "Edit your Book";

    const SERVER_URL = "http://localhost:5000";
    const ENDPOINT = `/api/books/update/${bookId}`;
    const METHOD = "PUT";

    const actionButtonText = "Finish";
    const getBook = () => {
        const books = useRouteLoaderData("root");

        return books?.filter((book) => book.id === bookId);
    };
    const [book] = getBook();

    const handleSubmit = async (formData) => {
        try {
            const res = await fetch(`${SERVER_URL}${ENDPOINT}`, {
                method: METHOD,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            res.ok && console.log("Successfully edited book", res.status);
            setStatus(res.ok);
        } catch (err) {
            console.log("Could not edit book", err.message);
        }
    };

    return (
        <>
            <GlobalNav />
            <Form
                props={{
                    actionButtonText,
                    book,
                    handleSubmit,
                    pageTitle,
                }}
            />
            {status && (
                <SuccessAlert
                    urlOnClick={".."}
                    description={"Successfully edited book!"}
                />
            )}
        </>
    );
};

export default EditBook;
