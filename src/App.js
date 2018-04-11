import React, { Component } from 'react';
import './App.css';
// import DeleteTodoItem from './delete_toDo_item.js'
let keygen = require("keygenerator");

class App extends Component {
  constructor(props){
    super(props) 
    this.state = {todo: JSON.parse(localStorage.getItem("toDo")) || []}
  }

  addItem = (e) => {
    if(!this.input.value) {
      e.preventDefault()
      return 
    } else {
      e.preventDefault()
      this.setState({
        todo: this.state.todo.concat({item: this.input.value, checked: false, key: keygen._()})
    })
    this.input.value = ''
   }
  } 
  changeCondition =(e) => {
    this.state.todo.map((val) => {
     if(val.item === e.target.parentElement.textContent) 
       val.checked = !val.checked
       localStorage.setItem('toDo', JSON.stringify(this.state.todo))
       return; 
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.todo > prevState.todo) {
      localStorage.setItem('toDo', JSON.stringify(this.state.todo)) 
    }
  }

  render() {
    return (
      <form onSubmit={this.addItem}>
        <input type='text' ref={(input)=> this.input = input}/>
        <input type='submit' value='Add' /> 
        <div>{this.state.todo.map((toBeDone, index) => {
            return <div key={index}><input type="checkbox" 
            key={toBeDone.key} 
            defaultChecked={toBeDone.checked} 
            onClick={this.changeCondition}/>
            {toBeDone.item}
            {/* <DeleteTodoItem state={this.state.todo}/> */}
            </div>
          })}
        </div>
      </form>
    );
  }
}

export default App;

