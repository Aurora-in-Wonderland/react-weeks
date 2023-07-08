import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 500px;
    height: 500px;
    margin: auto;
    border: 3px solid #145f37;
    border-radius: 30px;
    ul {
        list-style-type: none;
    }
    button {
        width: 100px;
        background: white;
        border: 3px solid #145f37;
        border-radius: 10px;
        font-size: 15px;
        font-weight: bold;
        margin: 10px;
        padding: 7.5px;
        cursor: pointer;

        &:hover {
            background: #145f37;
            color: white;
            transition: 0.2s;
        }
    }
`;

export default function DetailToDoList() {
    const param = useParams();
    const todos = useSelector((state) => state.todos);
    const todo = todos.find((todo) => todo.id === parseInt(param.id));
    const navigate = useNavigate();

    return (
        <>
            <Container>
                <ul>
                    <li>id: {todo.id}</li>
                    <li>title: {todo.title}</li>
                    <li>text: {todo.text}</li>
                </ul>
                <button onClick={() => navigate(`/`)}>HOME</button>
            </Container>
        </>
    );
}
