import React, { Component } from 'react';

class ToDoItem extends Component {
  constructor(props){
    super(props)
  }
  editToDo = (id) =>{
    this.props.removeToDo(id)
  }

  // checkTask=()=> {
  //   const taskStyle = {
  //   color: isActive ? 'green' : 'red',
  //   cursor: 'pointer'
  //   }
  // }

  render() {
    return (
      <div className='list'>{this.props.todo.item} <button onClick={(e)=> this.editToDo(this.props.id)}>Delete</button></div>
    );
  }
}

export default ToDoItem;