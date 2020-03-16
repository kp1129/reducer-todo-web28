import React from 'react';

const Todo = ({todo}) => {
    return (
        <div className="todo">
            <p>{todo.item}</p>
        </div>
    )
}

export default Todo;