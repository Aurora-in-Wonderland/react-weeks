import "./App.css";
// import { useState } from "react";
import { styled } from "styled-components";

import Nav from "./components/Nav";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";
import { useSelector } from "react-redux";

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;

function App() {
    const todos = useSelector((state) => state.todos);

    const handleDelete = (deleted) => {
        ;
        // setTodos([...todos.filter((todo) => todo.id !== deleted.id)]);
        // // console.log(deleted);
    };

    const handleUpdate = (updated) => {
        ;
        // setTodos([
        //     ...todos.map((todo) =>
        //         todo.id === updated.id ? { ...todo, status: todo.status === "active" ? "completed" : "active" } : todo
        //     ),
        // ]);
        // console.log(updated);
    };

    return (
        <>
            <Nav />
            <InputForm />
            <h2>WORKING🔥</h2>
            <Flex>
                {todos.map((item) =>
                    item.status === "active" ? (
                        <ToDoList
                            key={item.id}
                            todo={item}
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                        />
                    ) : null
                )}
            </Flex>
            <h2>DONE✨</h2>
            <Flex>
                {todos.map((item) =>
                    item.status === "completed" ? (
                        <ToDoList
                            key={item.id}
                            todo={item}
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                        />
                    ) : null
                )}
            </Flex>
        </>
    );
}

export default App;
