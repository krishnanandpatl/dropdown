import React from 'react'
import './dropitems.css'

function DropItems(props) {
  console.log(props.value)
  return (
    <div className='menu-items'>
      {props.children}
    </div>
  )
}

export default DropItems