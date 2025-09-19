
// import React, { createContext, useContext, useState } from 'react';


// const TodoContext = useContext();
// //ADD, TOGGLE, EDIT, DELETE, CLEAR
// const todoReducer = (state, action) =>{
//     switch(action.type){
//         case 'ADD':
//             return [
//                 ...state, 
//                 {
//                 id:state.length+1,
//                 title:action.payload.title,
//                 completed:false,
//                 createdAt: new Date().toLocaleString()
//                 }
//             ]

//         case 'TOGGLE':
//             return state.map(todo =>
//                 todo.id === action.payload.id 
//                 ? {...todo, completed: !todo.completed}
//                 : todo
//             )

//         case 'EDIT':
//             return state.map(
//                 todo => todo.id === action.payload.id
//                 ? { ...todo, ...action.payload.updates}
//             )


//         case 'DELETE':

//         case 'CLEAR':

//     }
// }