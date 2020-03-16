import React from "react";
import { TOGGLE_COMPLETED } from "../reducers/todoReducer";

const Todo = ({ todo, dispatch }) => {
  return (
    <p
      className={todo.completed ? "todo completed" : "todo"}
      onClick={() => dispatch({ type: TOGGLE_COMPLETED, payload: todo.id })}
    >
      {todo.item}
    </p>
  );
};

export default Todo;
