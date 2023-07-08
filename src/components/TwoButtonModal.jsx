import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 300px;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 24px;
    background-color: pink;
    z-index: 10000;
`;

export default function TwoButtonModal({ setModalOpen }) {
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <Container>
            <button onClick={closeModal}>닫기</button>
            <button>확인</button>
            <p>모달창입니다.</p>
        </Container>
    );
}
