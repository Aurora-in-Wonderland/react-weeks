import React from "react";
import styled from "styled-components";

const Form = styled.div`
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
    return (
        <div>
            <Form>
                <span>제목: </span>
                <input
                    type="text"
                    placeholder="제목을 입력해주세요"
                ></input>
                <span>내용: </span>
                <input
                    type="text"
                    placeholder="내용을 입력해주세요"
                ></input>
                <button>입력</button>
            </Form>
        </div>
    );
}
