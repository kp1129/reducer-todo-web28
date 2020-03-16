import React from 'react';

export const ADD_TODO = "ADD_TODO";

export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 1
          },
          {
            item: 'Refuse to panic about coronavirus',
            completed: false,
            id: 2
          },
          {
            item: 'Read "Cracking the Coding Interview"',
            completed: false,
            id: 3
          }
    ]
}

export const todoReducer = (state, action) => {
    switch(action.type){
        case ADD_TODO:
            let newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                ...state, 
                todos: [...state.todos, newTodo]
            }
        default:
            return state;
    }
}