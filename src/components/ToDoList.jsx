import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deletedTodo, updatedTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";

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

export default function ToDoList({ status }) {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            {todos
                .filter((todo) => todo.status === status)
                .map((todo) => (
                    <Container key={todo.id}>
                        <Link to={`/detail/${todo.id}`}>
                            <ul>
                                <li>{todo.title}</li>
                                <li>{todo.text}</li>
                            </ul>
                        </Link>
                        <Buttons>
                            <Button
                                color="red"
                                onClick={() => {
                                    // dispatch(deletedTodo(id))
                                    dispatch({
                                        type: "DELETED_TODO",
                                        payload: todo.id,
                                    });
                                }}
                            >
                                삭제
                            </Button>
                            <Button
                                color="#145f37"
                                onClick={() => {
                                    // dispatch(updatedTodo(id))
                                    dispatch({
                                        type: "UPDATED_TODO",
                                        payload: todo.id,
                                    });
                                }}
                            >
                                {todo.status === "active" ? "완료" : "다시하기"}
                            </Button>
                        </Buttons>
                    </Container>
                ))}
        </>
    );
}
