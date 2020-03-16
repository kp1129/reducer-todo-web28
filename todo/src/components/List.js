import React from 'react';
import Todo from './Todo';

const List = ({data}) => {
    return (
        <div className="list-of-todos">
            {data.map(todo => <Todo todo={todo} />)}
        </div>
    )
}

export default List;