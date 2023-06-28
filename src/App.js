import "./App.css";
import { useState } from "react";
import { styled } from "styled-components";

import Nav from "./components/Nav";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "리액트 강의 듣기",
            text: "1강부터 5강까지 강의 듣기",
            status: "active",
        },
        {
            id: 2,
            title: "리액트 강의 듣기",
            text: "5강부터 6강까지 강의 듣기",
            status: "active",
        },
        {
            id: 3,
            title: "To Do List 만들기",
            text: "오늘 17:00까지 제출",
            status: "active",
        },
    ]);

    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    };

    const handleDelete = (deleted) => {
        setTodos([...todos.filter((todo) => todo.id !== deleted.id)]);
        // console.log(deleted);
    };

    return (
        <>
            <Nav />
            <InputForm onAdd={handleAdd} />
            <h2>WORKING🔥</h2>
            <Flex>
                {todos.map((item) => (
                    <ToDoList
                        key={item.id}
                        todo={item}
                        onDelete={handleDelete}
                    />
                ))}
            </Flex>
            <h2>DONE✨</h2>
        </>
    );
}

export default App;
