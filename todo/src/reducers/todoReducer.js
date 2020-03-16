import React from 'react';

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

        default:
            return state;
    }
}