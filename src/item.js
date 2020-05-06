import React, { Fragment } from 'react'

function Item({ item, toggleState }) {
  return (
    <Fragment>
      <label className="input-container">
         <input
           type='checkbox'
           defaultChecked={item.checked}
           onClick={(event) => toggleState(event)}
           value={item.item}
         /> 
         <span className="checkmark"></span>
         <div className='input-value'>{item.item}</div>
      </label>
    </Fragment>
  )
}

export default Item
