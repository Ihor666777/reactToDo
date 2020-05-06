import React, { Fragment } from 'react'

function Input({ refInput }) {
  return (
    <Fragment>
      <input type='text' ref={(input) =>refInput(input)} />
      <input type='submit' value='Add' />
    </Fragment>
  )
}

export default Input
