// action value
export const ADD_TODO = "ADD_TODO";
export const DELETED_TODO = "DELETED_TODO";
export const UPDATED_TODO = "UPDATED_TODO";

// action creater
export const addTodo = (payload) => {
    return { type: ADD_TODO, payload };
};
export const deletedTodo = (payload) => {
    return { type: ADD_TODO, payload };
};
export const updatedTodo = (payload) => {
    return { type: UPDATED_TODO, payload };
};

// initial state
const initialState = [
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
];

// reducer
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETED_TODO:
            return state.filter((todo) => todo.id !== action.payload);
        case UPDATED_TODO:
            return state.map((todo) =>
                todo.id === action.payload 
                ? { ...todo, status: todo.status === "active" ? "completed" : "active" } 
                : todo
            );
        default:
            return state;
    }
};

export default todos;
