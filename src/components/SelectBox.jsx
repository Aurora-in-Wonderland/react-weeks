import React, { useState } from "react";
import styled from "styled-components";

const Select = styled.select`
    width: 300px;
    height: 40px;
    border-radius: 12px;
    margin-right: 10px;
`;

export default function SelectBox() {
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
                이름
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
