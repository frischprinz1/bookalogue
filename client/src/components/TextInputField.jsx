import { useId } from "react";

import styled from "styled-components";
import * as Label from "@radix-ui/react-label";

const InputFieldWrapper = styled.div`
    margin-block-start: 15px;
    .LabelRoot {
        display: block;
        font-size: 13px;
        font-weight: 400;
        line-height: 19px;
        color: var(--form-subheadline-color);
    }

    .Input {
        outline: 1px solid var(--light-gray-100);

        border-radius: 2px;
        margin-block-start: 4px;
        padding-block: 10px;
        padding-inline: 15px;
        border: none;

        width: 100%;
        color: var(--form-subheadline-color);
        height: 38px;
    }
`;

const InputField = ({ onChange, value, name, label }) => {
    const id = useId();

    return (
        <InputFieldWrapper>
            <Label.Root
                className="LabelRoot"
                htmlFor={`${id}-${name}`}
            >
                {label}
            </Label.Root>
            <input
                onChange={onChange}
                className="Input"
                value={value}
                type="text"
                name={name}
                id={`${id}-${name}`}
            />
        </InputFieldWrapper>
    );
};

export default InputField;
