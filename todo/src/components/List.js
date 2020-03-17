import React from 'react';
import Todo from './Todo';

const List = ({data, dispatch}) => {
    return (
        <div className="list-of-todos">
            {data.map(todo => <Todo dispatch={dispatch} todo={todo} />)}
        </div>
    )
}

export default List;