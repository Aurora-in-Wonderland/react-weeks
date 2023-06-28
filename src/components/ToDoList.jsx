import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 300px;
    height: 200px;
    border: 5px solid #145f37;
    border-radius: 20px;
    margin: 30px 0;

    ul {
        padding: 0;
        margin: 30px 0 30px 15px;
        list-style-type: none;
    }
    li:nth-child(1) {
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 20px;
    }
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const DeletedButton = styled.button`
    width: 100px;
    background: white;
    border: 3px solid red;
    border-radius: 10px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    margin: 10px;
    padding: 7.5px;
    cursor: pointer;

    &:hover {
        background: red;
        color: white;
        transition: 0.3s;
    }
`;

const CompletedButton = styled.button`
    width: 100px;
    background: white;
    border: 3px solid #145f37;
    border-radius: 10px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    margin: 10px;
    padding: 7.5px;
    cursor: pointer;

    &:hover {
        background: #145f37;
        color: white;
        transition: 0.3s;
    }
`;

export default function ToDoList({ todo, onDelete }) {
    const handleDelete = () => onDelete(todo);

    return (
        <>
            <Container>
                <ul>
                    <li>{todo.title}</li>
                    <li>{todo.text}</li>
                </ul>
                <Buttons>
                    <DeletedButton
                        todo={todo}
                        onClick={handleDelete}
                    >
                        취소
                    </DeletedButton>
                    <CompletedButton>완료</CompletedButton>
                </Buttons>
            </Container>
        </>
    );
}
