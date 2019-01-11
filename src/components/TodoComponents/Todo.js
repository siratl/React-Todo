import React from 'react';

const Todo = props => {
    if (props.todoItems.task === '') {
        return null;
    } else {
        return (
            <div className='todoItem'
            style={props.todoItems.completed ? {textDecoration: 'line-through', fontWeight: 'bold', color: 'red'} : null}
            onClick={() => props.handleToggleComplete(props.todoItems.id)}>{props.todoItems.task}</div>
        );  
    }
    
}

export default Todo;