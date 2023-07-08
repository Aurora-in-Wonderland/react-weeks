import React from "react";
import styled from "styled-components";
import Button from "./Button";

const PrimaryButtons = styled.div`
    margin: 30px 0;
`;
const NegativeButtons = styled.div`
    margin: 30px 0;
`;

export default function Buttons() {
    return (
        <>
            <h1>Button</h1>
            <PrimaryButtons>
                <Button
                    size="big"
                    name="Large Primary Button"
                    status="primary"
                />
                <Button
                    size="medium"
                    name="Medium"
                    status="primary"
                />
                <Button
                    size="small"
                    name="Small"
                    status="primary"
                />
            </PrimaryButtons>
            <NegativeButtons>
                <Button
                    size="big"
                    name="Large Primary Button"
                    status="negative"
                />
                <Button
                    size="medium"
                    name="Medium"
                    status="negative"
                />
                <Button
                    size="small"
                    name="Small"
                    status="negative"
                />
            </NegativeButtons>
        </>
    );
}
