import React from 'react';

const Form = () => {
    return (
        <div className="user-controls">
            <form>
                <label htmlFor="add-todo">
                    <input type="text" id="add-todo" name="add-todo" />
                </label>
                <button type="submit">add todo</button>
            </form>
            <button>clear completed</button>
        </div>
    )
}

export default Form;