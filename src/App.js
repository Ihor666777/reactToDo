import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props) 
    this.state = {todo: JSON.parse(localStorage.getItem("toDo")) || []}
  }

  addItem = (e) => {
    if(!this.input.value) {
      e.preventDefault()
    } else {
      e.preventDefault()
      this.setState({
        todo: this.state.todo.concat({item: this.input.value, checked: false})
    })
    this.input.value = ''
   }
  } 

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.todo > prevState.todo) {
      localStorage.setItem('toDo', JSON.stringify(this.state.todo)) 
    }
  }

  render() {
    console.log(this.state.todo)
    return (
      <form onSubmit={this.addItem}>
        <input type='text' ref={(input)=> this.input = input}/>
        <input type='submit' value='Add' /> 
        <div>{this.state.todo.map((toBeDone, index) => {
            return <div key={index}><input type="checkbox"/>{toBeDone.item}</div>
          })}
        </div>
      </form>
    );
  }
}

export default App;
