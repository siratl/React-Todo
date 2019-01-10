import React from 'react';

const todoForm = props => {
    

    return (
        <form>
            <input 
                value={props.todoName}
                type='text'
                name='todoName'
                placeholder='Todo item'
                onChange={props.handleTodoChange}
            />
            <button onClick={props.addTodo}>Add Todo
            </button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )
};

export default todoForm;