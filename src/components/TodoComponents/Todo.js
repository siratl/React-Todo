import React from 'react';

const Todo = props => {
    return (
        <div onClick={() => props.handleToggleComplete(props.todoItems.id)}>{props.todoItems.task}</div>
    );
}

export default Todo;