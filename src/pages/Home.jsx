import React from "react";

import { styled } from "styled-components";

import Nav from "../components/Nav";
import InputForm from "../components/InputForm";
import ToDoList from "../components/ToDoList";

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;

function Home() {
    return (
        <>
            <Nav />
            <InputForm />
            <h2>WORKING🔥</h2>
            <Flex>
                <ToDoList />
            </Flex>
            <h2>DONE✨</h2>
            <Flex>
                <ToDoList />
            </Flex>
        </>
    );
}

export default Home;
