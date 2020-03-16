import React from 'react';
import {TOGGLE_COMPLETED} from '../reducers/todoReducer';

const Todo = ({todo, dispatch}) => {
    return (
        <div className="todo"
            onClick={() => dispatch({ type: TOGGLE_COMPLETED, payload: todo.id })}
        >
            <p className={todo.completed ? "completed" : ""} >{todo.item}</p>
        </div>
    )
}

export default Todo;