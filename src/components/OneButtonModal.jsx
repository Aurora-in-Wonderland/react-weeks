// import React from "react";
// import styled from "styled-components";
// import { useEffect, useRef } from "react";

// const Container = styled.div`
//     /* 모달창 크기 */
//     width: 500px;
//     height: 300px;

//     /* left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%); */

//     border-radius: 12px;
//     box-sizing: border-box;
//     padding: 24px;
//     background-color: pink;
// `;

import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
`;

const ModalContainer = styled.div`
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

export default function Modal({ setClickOpen }) {
    const modalRef = useRef(null);

    const closeModal = () => {
        setClickOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setClickOpen();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [setClickOpen]);

    return (
        <ModalOverlay>
            <ModalContainer ref={modalRef}>
                <button onClick={closeModal}>X</button>
                <p>모달 창입니다.</p>
            </ModalContainer>
        </ModalOverlay>
    );
}
