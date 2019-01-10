// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    return (
        <div>
            {props.todoItems.map(todo => {
                
                return <Todo 
                handleToggleComplete={props.handleToggleComplete}
                key={todo.id} 
                todoItems={todo} />;
            })}
        </div>
    );
};

export default TodoList;