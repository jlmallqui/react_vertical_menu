import React, { useState } from 'react'
import { Link } from "react-router-dom";

export const NavbarSubItem = ({item}) => {
const [subItem, setSubItem] = useState(item)
const [isActive, setisActive] = useState(false) 

const onMouseOver = (e) => { 
  console.log('entro a over');
  setisActive(true)
  }

  
  

  const onClick = () => { 
      
    // if(seleccionado){
      setisActive(true)
    // }else{
      console.log('hijo click sub item item');
//        setmostrar(false)
    // }

  }


  const verificar = () => { 
      
    // if(seleccionado){
    //   setisActive(true)
    // }else{
      setisActive(false)
//        setmostrar(false)
    // }

  }



  return (
    <li className="nav-item"
      //onClick={()=>onClick()}
       onMouseOver={(e)=>onMouseOver(e)} 
       onMouseOut={()=>verificar()}  
      >
        
        <Link className={isActive ? 'n2 nav-link text-dark   active2' : 'n2 nav-link text-dark  '}
         to={subItem.url}>{subItem.desc} </Link>    
    </li>
  )
}
