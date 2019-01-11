import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItems: todos,
      todoName: '',
    };
  }

  handleTodoChange = ev => {
    this.setState({todoName: ev.target.value})
    console.log(ev.target.value)
  };

  addTodo = ev => {
    ev.preventDefault();
    this.setState(
      {
        todoItems: 
        [
          ...this.state.todoItems,
          {
            task: this.state.todoName, 
            id: Date.now(), 
            completed: false
          }
        ], 
        todoName: ''
      }, this.localStorageUpdate)
  };

  toggleTodoComplete = (id) => {
    // set state
    // look through todo item and select element clicked
    // toggle status for todo item
    this.setState({
      todoItems: this.state.todoItems.map(item => {
        if (item.id !== id) {
          return item;
        } else {
          return {
            ...item, 
            completed: !item.completed
          }
        }
      })
    }, this.localStorageUpdate)
  }

  clearCompleted = ev => {
    ev.preventDefault();
    this.setState({
      todoItems: this.state.todoItems.filter(item => 
        !item.completed
      )
    }, this.localStorageUpdate)
  };

  loadLocalStorage = () => {
    if (localStorage.hasOwnProperty('task')) {
      let task = localStorage.getItem('task');
        task = JSON.parse(task);
      this.setState({todoItems: task})
    }
  }

  localStorageUpdate = () => {
    localStorage.setItem('task', JSON.stringify(this.state.todoItems));
  }
  
  componentDidMount() {
    this.loadLocalStorage();
  }

  render() {
    return (
      <div className='appContainer'>
        <div className='contentWrapper'>
          <h2>Welcome to your Todo App!</h2>
          <TodoList 
            todoItems={this.state.todoItems}
            handleToggleComplete={this.toggleTodoComplete}
          />
          <TodoForm 
            handleTodoChange={this.handleTodoChange} 
            todoName={this.state.todoName}
            addTodo={this.addTodo}
            clearCompleted={this.clearCompleted}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
