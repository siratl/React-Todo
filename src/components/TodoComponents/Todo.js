import React from 'react';

const Todo = props => {
    return (
        <div 
        style={props.todoItems.completed ? {textDecoration: 'line-through'} : null}
        onClick={() => props.handleToggleComplete(props.todoItems.id)}>{props.todoItems.task}</div>
    );
}

export default Todo;