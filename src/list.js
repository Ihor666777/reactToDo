import React, { Fragment } from 'react'
import Item from './item'
import DeleteItem from './delete-item'

function List({ todo, toggleItem, deleteItem }) {
  return (
    <Fragment>
      {todo.map((item) => {
        return (
          <div key={item.key} className='item'>
            <Item item={item} toggleState={toggleItem}/> 
            <DeleteItem item={item.key} deleteKey={deleteItem} /> 
          </div>
        )
      })}
    </Fragment>
  )
}

export default List
