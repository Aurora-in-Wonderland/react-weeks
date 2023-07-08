import React, { useState } from "react";
import styled from "styled-components";

const Select = styled.select`
    width: 300px;
    height: 40px;
    border-radius: 12px;
    margin-right: 10px;
    option {
        border: 1px solid rgb(221, 221, 221);
        height: 40px;
        width: 300px;
        background-color: rgb(255, 255, 255);
        border-radius: 12px;
    }
`;

export default function SelectPrice() {
    const selectOptions = [
        { value: "리액트", label: "리액트" },
        { value: "자바", label: "자바" },
        { value: "스프링", label: "스프링" },
    ];
    const [selected, setSelected] = useState("");

    const handleSelectChange = (event) => {
        setSelected(event.target.value);
    };
    return (
        <>
            <label>
                가격
                <Select
                    value={selected}
                    onChange={handleSelectChange}
                >
                    {selectOptions.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </Select>
            </label>
        </>
    );
}
