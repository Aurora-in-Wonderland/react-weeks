import { useState } from "react";
import styled from "styled-components";

const StLists = styled.div`
    width: 600px;
    border: 3px solid #b4fdd8;
    border-radius: 15px;
`;

const StList = styled.div`
    /* width: 600px; */
    height: 60px;
    padding-left: 15px;

    display: flex;
    flex-direction: row;
    justify-content: left;

    &:hover {
        background-color: #b4fdd8;
    }
    &:first-child {
        &:hover {
            background-color: #b4fdd8;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
        }
    }
    &:last-child {
        &:hover {
            background-color: #b4fdd8;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
        }
    }
`;

export default function List() {
    const [lists, setLists] = useState([
        {
            id: 1,
            title: "고기 먹을 사람!",
            content: "이번 주 목요일에 고기 같이 먹으실 분 구해요!",
        },
        {
            id: 2,
            title: "공구",
            content: "홈쇼핑에서 같이 화장품 사실 분 구해요!",
        },
        {
            id: 3,
            title: "가구 조립",
            content: "가구 조립 3만원에 해드립니다",
        },
        {
            id: 4,
            title: "탈덕합니다",
            content: "탈덕했습니다. 앨범, 굿즈 필요하신 분께 드려요",
        },
    ]);
    console.log(lists);

    return (
        <>
            <StLists>
                {lists.map((list) => (
                    <StList key={list.id}>
                        <div>{list.id}</div>
                        <div>{list.title}</div>
                    </StList>
                ))}
            </StLists>
        </>
    );
}
