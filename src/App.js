import React, { Component } from 'react'
import './app.sass'
import Input from './input'
import List from './list'

const keygen = require('keygenerator')

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: JSON.parse(localStorage.getItem('toDo')) || [],
    }
  }

  createInputRef = (input) => {
    this.input = input
  }

  isExists = () => {
    return this.state.todo.some(k => k.item === this.input.value)
  }

  addItem = (e) => {
    e.preventDefault()
    if (!this.input.value) return false
    if (this.isExists()) return false
    this.setState({
      todo: this.state.todo.concat({
        item: this.input.value,
        checked: false,
        key: keygen._(),
      }),
    })
    this.input.value = ''
  }

  toggleItem = ({ target }) => {
    return this.state.todo.map((value) => {
      if (value.item === target.valueue) {
        value.checked = !value.checked
        localStorage.setItem('toDo', JSON.stringify(this.state.todo))
      }
      return value
    })
  }

  deleteItem = (key) => {
    this.setState((state) => ({
      todo: state.todo.filter((item) => item.key !== key),
    }))
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.todo !== prevState.todo) {
      return localStorage.setItem('toDo', JSON.stringify(this.state.todo))
    }
  }

  render() {
    return (
      <form className='container' onSubmit={this.addItem}>
        <div className='content'>
          <div className='input'>
            <Input refInput={this.createInputRef} />
          </div>
          <div className='list'>
            <List
              todo={this.state.todo}
              toggleItem={this.toggleItem}
              deleteItem={this.deleteItem}
            />
          </div>
        </div>
      </form>
    )
  }
}

export default App
