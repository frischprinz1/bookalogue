import styled from "styled-components";
import { forwardRef } from "react";

const StyledButton = styled.button`
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

// const Button = ({ className, children }) => {
//     return <StyledButton className={className}>{children}</StyledButton>;
// };
const Button = forwardRef((props, forwardedRef) => {
    return (
        <StyledButton
            {...props}
            className={props.className}
            ref={forwardedRef}
        >
            {props.children}
        </StyledButton>
    );
});

Button.StyledButton = StyledButton;

export default Button;
