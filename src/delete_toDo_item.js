import React, { Component } from 'react';

class DeleteToDoItem extends Component {
  deleteItem = (e) => {
    console.log(e.target.previousSibling)
  }
   render(){
     return (
       <button onClick={this.deleteItem}>Delete</button>
     )
   }
  } 

  export default DeleteToDoItem