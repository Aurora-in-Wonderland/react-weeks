import React from "react";
import styled from "styled-components";
import SelectBox from "./SelectBox";
import SelectPrice from "./SelectPrice";

const Container = styled.div`
    height: 200px;
    border: 3px solid rgb(221, 221, 221);
    margin-top: 30px;
`;
export default function Select() {
    return (
        <>
            <Container>
                <h1>Select</h1>
                <SelectBox />
                <SelectPrice />
            </Container>
        </>
    );
}
