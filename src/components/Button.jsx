import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    background-color: ${({ bgcolor }) => bgcolor};
    color: ${({ color }) => color};
    border: ${({ border }) => border};
    border-radius: 8px;
    margin-right: 6px;
    cursor: pointer;
    &:active {
        background-color: ${({ activecolor }) => activecolor};
    }
`;

export default function Button({ size, name, status }) {
    if (status === "primary") {
        if (size === "big") {
            return (
                <CustomButton
                    bgcolor="white"
                    activecolor="rgb(229, 229, 229)"
                    border="3px solid rgb(85, 239, 196)"
                    color="rgb(0, 0, 0)"
                    width="200"
                    height="50"
                >
                    {name}
                </CustomButton>
            );
        } else if (size === "medium") {
            return (
                <CustomButton
                    bgcolor="rgb(85, 239, 196)"
                    activecolor="rgb(52, 155, 126)"
                    border="none"
                    color="rgb(0, 0, 0)"
                    width="130"
                    height="45"
                >
                    {name}
                </CustomButton>
            );
        } else if (size === "small") {
            return (
                <CustomButton
                    bgcolor="rgb(85, 239, 196)"
                    activecolor="rgb(52, 155, 126)"
                    border="none"
                    color="rgb(0, 0, 0)"
                    width="100"
                    height="40"
                >
                    {name}
                </CustomButton>
            );
        }
    } else if (status === "negative") {
        if (size === "big") {
            return (
                <CustomButton
                    bgcolor="white"
                    activecolor="rgb(229, 229, 229)"
                    border="3px solid rgb(215, 101, 75)"
                    color="rgb(214, 48, 49)"
                    width="200"
                    height="50"
                >
                    {name}
                </CustomButton>
            );
        } else if (size === "medium") {
            return (
                <CustomButton
                    bgcolor="rgb(250, 177, 160)"
                    color="rgb(214, 48, 49)"
                    activecolor="rgb(215, 101, 75)"
                    border="none"
                    width="150"
                    height="45"
                >
                    {name}
                </CustomButton>
            );
        } else if (size === "small") {
            return (
                <CustomButton
                    bgcolor="rgb(250, 177, 160)"
                    color="rgb(214, 48, 49)"
                    activecolor="rgb(215, 101, 75)"
                    border="none"
                    width="100"
                    height="40"
                >
                    {name}
                </CustomButton>
            );
        }
    }

    return <>{/* <CustomButton>{name}</CustomButton> */}</>;
}
