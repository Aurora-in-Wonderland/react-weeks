// action value
export const ADD_TODO = "ADD_TODO";

// action creater
export const addTodo = (payload) => {
    return { type: ADD_TODO, payload };
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
            // const retval = {
            //     ...state,
            //     todos: [...state.todos, action.payload],
            // };
            // console.log(retval);
            return [...state, action.payload];
        default:
            return state;
    }
};

export default todos;
