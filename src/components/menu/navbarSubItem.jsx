import React, { useState } from 'react'
import { Link } from "react-router-dom";

export const NavbarSubItem = ({item,onClickMenu}) => {
const [subItem, setSubItem] = useState(item)
const [isActive, setisActive] = useState(false) 

const onMouseOver = (e) => { 
   setisActive(true)
  }
 

  const onMouseOut = () => {  
      setisActive(false)   
  }



  return (
    <li className="nav-item" 
       onMouseOver={(e)=>onMouseOver(e)} 
       onMouseOut={onMouseOut} 
       onClick={onClickMenu} 
      >
        
        <Link className={isActive ? 'n2 nav-link text-dark menu_active_sub' : 'n2 nav-link text-dark'}
         to={subItem.url}>{subItem.desc} </Link>    
    </li>
  )
}
