import React, { Fragment } from 'react'
import Item from './Item'
import DeleteItem from './DeleteItem'

function List({ todo, toggleItem, deleteItem }) {
  return (
    <Fragment>
      {todo.map((item) => {
        return (
          <div key={item.key} className="item">
            <Item item={item} toggleState={toggleItem} />
            <DeleteItem item={item.key} deleteKey={deleteItem} />
          </div>
        )
      })}
    </Fragment>
  )
}

export default List
