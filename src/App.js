import React, { Component } from 'react';
import Header from './Components/header';
import ToDoItem from './Components/todo-item';
import AddItem from './Components/add-item';
import './App.css';
let keygen = require("keygenerator");

class App extends Component {
  constructor(props){
    super(props) 
    this.state = {todo: JSON.parse(localStorage.getItem("toDo")) || []}
}


addToDo = (val)=> {
  this.setState({
      todo: this.state.todo.concat({id:keygen._(), item: val , isActive: false})
    })
    localStorage.setItem('toDo',  JSON.stringify(this.state.todo))
  }
  
  removeToDo = (id) => {
    this.setState({
      todo: this.state.todo.filter((todo, index) => todo.id !== id)
    })
    localStorage.setItem('toDo', JSON.stringify(this.state.todo)) 
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.todo.length !== prevState.todo.length) {
      localStorage.setItem('toDo', JSON.stringify(this.state.todo)) 
    }
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <AddItem 
          todo={this.state.todo}
          addToDo={this.addToDo}
        />
        <ol>
          {
           this.state.todo.map(todo => {
             return <li key={todo.id}><ToDoItem 
               todo={todo}
               id={todo.id}
               removeToDo={this.removeToDo} 
               /></li>
           })
          }
        </ol>
      </div>
    );
  }
}

export default App;
