import React from 'react'

function DeleteItem({ item, deleteKey }) {
  return (
    <span className='delete' onClick={() => deleteKey(item)}>
      &#10005;
    </span>
  )
}

export default DeleteItem
