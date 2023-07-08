import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";

// not flex use grid
const Form = styled.form`
    height: 60px;
    background: #f2f1df;
    border-radius: 0 0 20px 20px;

    padding-left: 30px;

    span {
        margin-right: 10px;
    }
    input {
        width: 300px;
        height: 30px;
        margin-right: 30px;
    }

    button {
        width: 100px;
        height: 40px;
        background: #145f37;
        color: white;
        font-size: 15px;
        font-weight: bold;
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }
`;

export default function InputForm() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos); // 구독
    const dispatch = useDispatch();

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        console.log(event.target.value);
    };
    const handleTextChange = (event) => {
        setText(event.target.value);
        console.log(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo({ id: Date.now(), title, text, status: "active" }));
        // dispatch가 실행됨으로서 컴포넌트가 구독하고 있는 상태가 변경되어서 해당 컴포넌트가 다시생성.
        console.log(todos);
        if (title.trim().length === 0 && text.trim().length === 0) {
            alert("내용을 입력하세요");
        }
        setText("");
        setTitle("");
    };
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <span>제목: </span>
                <input
                    type="text"
                    placeholder="제목을 입력해주세요"
                    value={todos.title}
                    onChange={handleTitleChange}
                ></input>
                <span>내용: </span>
                <input
                    type="text"
                    placeholder="내용을 입력해주세요"
                    value={todos.text}
                    onChange={handleTextChange}
                ></input>
                <button type="submit">입력</button>
            </Form>
        </div>
    );
}
