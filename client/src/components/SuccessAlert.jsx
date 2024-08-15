import Alert from "./Alert";
import { useNavigate } from "react-router-dom";

const SuccessAlert = ({ urlOnClick, description }) => {
    const navigate = useNavigate();

    return (
        <Alert
            props={{
                triggerText: "",
                description,
                actionText: "OK",
                handleOnClickAction: () => navigate(urlOnClick),
            }}
        />
    );
};
export default SuccessAlert;
