import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

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

const Button = styled.button`
    width: 100px;
    background: white;
    border: 3px solid ${({ color }) => color};
    border-radius: 10px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    margin: 10px;
    padding: 7.5px;
    cursor: pointer;

    &:hover {
        background: ${({ color }) => color};
        color: white;
        transition: 0.2s;
    }
`;

export default function ToDoList() {
    const todos = useSelector((state) => {
        return state.todos;
    });
    const dispatch = useDispatch();

    // const handleDelete = () => onDelete(todo);

    // const handleUpdate = () => {
    //     const updatedTodo = {
    //         ...todo,
    //         status: todo.status === "active" ? "completed" : "active",
    //     };
    //     onUpdate(updatedTodo);
    // };
    // console.log(todos);

    return (
        <>
            {todos.map((todo) => (
                <Container key={todo.id}>
                    <ul>
                        <li>{todo.title}</li>
                        <li>{todo.text}</li>
                    </ul>

                    <Buttons>
                        <Button color="red">취소</Button>
                        <Button color="#145f37">{todo.status === "active" ? "완료" : "다시하기"}</Button>
                    </Buttons>
                </Container>
            ))}
        </>
    );
}
