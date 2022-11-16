import React,{useState} from 'react'
import DropItems from './DropItems'
import './dropdown.css'
import {CSSTransition} from 'react-transition-group'

function Dropdown() {
    let [activeMenu,setActiveMenu]=useState('main');
  return (
    <div className='dropdown'>
        <DropItems>1</DropItems>
        <DropItems>2</DropItems>
        <DropItems>3</DropItems>
    </div>
  )
}

export default Dropdown