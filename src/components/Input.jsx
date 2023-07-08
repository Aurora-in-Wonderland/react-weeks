import React from "react";
import styled from "styled-components";

import Button from "./Button";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
`;
const InputName = styled.input`
    width: 200px;
    height: 40px;
    border-radius: 8px;
    outline: none;
    margin-right: 30px;
`;
const InputPrice = styled.input`
    width: 200px;
    height: 40px;
    border-radius: 8px;
    outline: none;
    margin-right: 30px;
`;

export default function Input() {
    const handlePriceChange = (event) => {
        const { value } = event.target;
        const formattedValue = value.replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        event.target.value = formattedValue;
    };
    return (
        <>
            <h1>Input</h1>
            <Container>
                <div>이름</div>
                <InputName type="text" />
                <div>가격</div>
                <InputPrice
                    type="text"
                    onChange={handlePriceChange}
                />
                <Button
                    size="small"
                    name="저장"
                    status="primary"
                />
            </Container>
        </>
    );
}
