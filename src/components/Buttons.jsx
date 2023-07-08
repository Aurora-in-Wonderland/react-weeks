import React from "react";
import Button from "./Button";

export default function Buttons() {
    return (
        <>
            <h1>Button</h1>
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
        </>
    );
}
