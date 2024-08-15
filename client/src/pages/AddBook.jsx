import GlobalNav from "../components/GlobalNav";
import Form from "../components/Form";
import { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";

const AddBook = () => {
    const [status, setStatus] = useState(false);
    const pageTitle = "Add Book";
    const pageSubTitle = `Let's showcase some books you might want to read later`;

    const SERVER_URL = "http://localhost:5000";
    const ENDPOINT = "/api/books/create";
    const METHOD = "POST";

    const handleSubmit = async (formData) => {
        try {
            const res = await fetch(`${SERVER_URL}${ENDPOINT}`, {
                method: METHOD,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            res.ok && console.log("Successfully added book", res.status);
            setStatus(res.ok);
        } catch (err) {
            console.log("Could not create books", err.message);
        }
    };
    return (
        <>
            <GlobalNav />
            <Form props={{ pageTitle, pageSubTitle, handleSubmit }} />
            {status && (
                <SuccessAlert
                    urlOnClick={".."}
                    description={"Successfully added book!"}
                />
            )}
        </>
    );
};

export default AddBook;
