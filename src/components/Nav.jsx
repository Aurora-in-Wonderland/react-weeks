import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
    background: #f2f1df;
    padding: 0.5px;
    padding-left: 30px;

    h1 {
        color: #145f37;
    }
`;

export default function Nav() {
    return (
        <>
            <NavBar>
                <h1>To Do List</h1>
            </NavBar>
        </>
    );
}
