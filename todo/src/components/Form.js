import React, {useState} from 'react';
import { ADD_TODO, CLEAR_COMPLETED } from '../reducers/todoReducer';

const Form = ({dispatch}) => {
    const [task, setTask] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ADD_TODO, payload: task });
        setTask("");
    }
    return (
        <div className="user-controls">
            <form onSubmit={handleSubmit} >
                <label htmlFor="add-todo">
                    <input type="text" id="add-todo" name="add-todo" value={task} onChange={handleChange} />
                </label>
                <button type="submit">add todo</button>
            </form>
            <button onClick={() => dispatch({ type: CLEAR_COMPLETED })}>clear completed</button>
        </div>
    )
}

export default Form;