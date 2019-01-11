import React from 'react';

const todoForm = props => {
    

    return (
        <form className='todoForm'>
            <input className='todoFormInput'
                value={props.todoName}
                type='text'
                name='todoName'
                placeholder='Todo item'
                onChange={props.handleTodoChange}
            />
            <div className='formBtn'>
                <button onClick={props.addTodo}>Add Todo
                </button>
                <button onClick={props.clearCompleted}>Clear Completed</button>
            </div>
            
        </form>
    )
};

export default todoForm;