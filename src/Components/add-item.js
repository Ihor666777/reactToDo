import React, { Component } from 'react';

class AddItem extends Component {
  addItem=(e)=>{
  if(!this.input.value) { 
      e.preventDefault()
      return []
  } else {
      e.preventDefault()
      this.props.addToDo(this.input.value)
      this.input.value='';
    }
  }

  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.addItem}>
        <input type='text' 
          ref={(input)=>this.input=input}/>
        <input type='submit' value='Add'/> 
      </form>
    );
  }
}

export default AddItem;