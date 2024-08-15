import { useState } from "react";

import styled from "styled-components";
import TextInputField from "./TextInputField";
import Button from "./Button.jsx";
import DeleteBookDialog from "./DeleteBook.jsx";

const Form = ({ props }) => {
    const { actionButtonText, book, pageTitle, pageSubTitle, handleSubmit } =
        props;

    const [title, setTitle] = useState(() => book?.title || "");
    const [author, setAuthor] = useState(() => book?.author || "");
    const [genres, setGenres] = useState(() => book?.genres?.join(", ") || "");
    const [link, setLink] = useState(() => book?.link || "");

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const formData = {
            title,
            author,
            genres: [genres],
        };

        await handleSubmit(formData);
    };

    return (
        <>
            <Form.Page>
                <form onSubmit={handleSubmitForm}>
                    <Form.Body>
                        <Form.Heading>{pageTitle}</Form.Heading>
                        {pageSubTitle ? (
                            <Form.SubHeading>{pageSubTitle}</Form.SubHeading>
                        ) : (
                            ""
                        )}
                        <hr className="divider" />

                        <TextInputField
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            name="bookName"
                            label="Book Name"
                        />

                        <TextInputField
                            onChange={(e) => setAuthor(e.target.value)}
                            value={author}
                            name="bookAuthor"
                            label="Book Author"
                        />

                        <TextInputField
                            onChange={(e) => setGenres(e.target.value)}
                            value={genres}
                            name="bookCategory"
                            label="Category"
                        />

                        <TextInputField
                            onChange={(e) => setLink(e.target.value)}
                            value={link}
                            name="bookLink"
                            label="Link"
                        />
                    </Form.Body>
                    <Form.Actions>
                        <p className="action">
                            {pageTitle.includes("Edit") ? (
                                <DeleteBookDialog>Remove Book</DeleteBookDialog>
                            ) : (
                                ""
                            )}
                        </p>
                        <Form.ActionButton>
                            {actionButtonText || pageTitle}
                        </Form.ActionButton>
                    </Form.Actions>
                </form>
            </Form.Page>
        </>
    );
};

const Page = styled.section`
    width: 100%;
    margin-block-start: 15px;

    hr {
        border: 1px solid var(--light-gray-100);
        margin-bottom: 30px;
    }

    @media screen and (min-width: 768px) {
        width: var(--page-width);
        margin-block-start: 40px;
    }
`;

const Heading = styled.div`
    font-size: 18px;
    font-weight: 500;
    line-height: 21.6px;
    color: var(--form-headline-color);
`;
const SubHeading = styled.p`
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    color: var(--form-subheadline-color);
`;
const Body = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 1px 1px var(--light-gray-100);

    border-radius: 4px;
    padding-block: 35px;
    padding-inline: 15px;

    width: 100%;

    @media screen and (min-width: 768px) {
        padding-block: 60px 80px;
        padding-inline: 100px;
    }
`;

const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    padding-inline: 15px;

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
    @media screen and (min-width: 768px) {
        padding-inline: 0px;
    }
`;

const ActionButton = styled(Button)`
    width: 200px;
`;

Form.Page = Page;
Form.Body = Body;
Form.Heading = Heading;
Form.SubHeading = SubHeading;
Form.Actions = Actions;
Form.ActionButton = ActionButton;

export default Form;
