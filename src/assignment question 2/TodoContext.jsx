import React, { createContext, useState, useReducer } from 'react';

const TodoContext = createContext();

// Actions: ADD, TOGGLE, DELETE, EDIT, RESET
const todoReducer = (state, action) => {
    const type = action.type;
    switch (type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload.title,
                    status: false,
                    createdAt: new Date().toLocaleTimeString(),
                },
            ];
        case 'TOGGLE':
            return state.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, status: !todo.status }
                    : todo
            );
        case 'DELETE':
            return state.filter((todo) => todo.id !== action.payload.id);
        case 'EDIT':
            return state.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, ...action.payload.updates }
                    : todo
            );
        case 'RESET':
            return [];
        default:
            return state;
    }
};

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useReducer(todoReducer, []);
    const [value, setValue] = useState('');

    const addTodo = (title) => {
        setTodos({
            type: 'ADD',
            payload: {
                title,
            },
        });
    };

    return (
        <TodoContext.Provider value={{ todos, value, setValue, addTodo, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext };
