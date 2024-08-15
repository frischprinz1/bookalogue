import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useParams, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useEffect, useRef } from "react";

const DeleteBook = ({ bookId, children }) => {
    const id = bookId || useParams().bookId;
    const navigate = useNavigate();
    const wait = new Promise((resolve) => setTimeout(resolve, 1000));

    const handleDeleteOnClick = async (e) => {
        try {
            const url = "http://localhost:5000/api/books/remove";
            const response = await fetch(`${url}/${id}`, {
                method: "DELETE",
            });

            await response.json();
            console.log("successfully removed book", response.status);
            // await wait();
            return navigate(`/`);
        } catch (e) {
            console.log("An error occurred");
        }
    };

    return (
        <AlertDialog.Root>
            <AlertDialogTrigger asChild>
                <span className="Button link">{children}</span>
            </AlertDialogTrigger>
            <AlertDialog.Portal>
                <AlertDialogOverlay />
                <AlertDialogTitle />
                <AlertDialogContent aria-label="AlertDialogTitle">
                    <AlertDialogDescription>
                        Are you sure you want to delete this book?
                    </AlertDialogDescription>
                    <Flex>
                        <AlertDialogCancel asChild>
                            <button className="Cancel">Cancel</button>
                        </AlertDialogCancel>
                        <AlertDialogAction
                            asChild
                            onClick={handleDeleteOnClick}
                        >
                            <button className="Delete">Delete</button>
                        </AlertDialogAction>
                    </Flex>
                </AlertDialogContent>
            </AlertDialog.Portal>
        </AlertDialog.Root>
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
const Flex = styled.div`
    display: flex;
    justify-content: center;

    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: #405261;
`;

const AlertDialogTrigger = styled(AlertDialog.Trigger)`
    // all: unset;
    font-weight: 400;
    font-size: 14px;
    line-height: 17.92px;

    color: #556575;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
const AlertDialogCancel = styled(AlertDialog.Cancel)`
    width: 123px;
    height: 40px;
    border-radius: 3px;
    border: none;
    padding-block: 0px;
    background-color: var(--cobalt-blue);
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    cursor: pointer;

    background: none;
    margin-inline-end: 15px;
    color: #405261;
    border: 1px solid var(--light-gray-200);
`;

const AlertDialogAction = styled(AlertDialog.Action)`
    width: 123px;
    height: 40px;
    border-radius: 3px;
    border: none;
    padding-block: 0px;
    background-color: var(--cobalt-blue);
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #fff;
    cursor: pointer;
`;

const AlertDialogTitle = styled(AlertDialog.Title)``;
const AlertDialogDescription = styled(AlertDialog.Description)`
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 500;
    line-height: 21.6px;
    color: #1d2b36;
    text-align: center;
`;

const AlertDialogContent = styled(AlertDialog.Content)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    color: #405261;
    border-radius: 6px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
        hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 440px;
    height: 219px;
    padding: 35px;
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const AlertDialogOverlay = styled(AlertDialog.Overlay)`
    background-color: rgba(3, 64, 119, 0.8);
    position: fixed;
    inset: 0;
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export default DeleteBook;
