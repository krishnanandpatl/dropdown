import React,{useState} from 'react'
import './navitems.css'

function Navitems(props) {
    let [open,setOpen]=useState(false);
  return (
    <li className='nav-items'>
       <div className='icon-button' onMouseEnter={()=>{setOpen(true)}}>{props.name}</div>
       {open && props.children}
    </li>
  )
}

export default Navitems