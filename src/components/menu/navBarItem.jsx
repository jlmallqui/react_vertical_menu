import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { NavbarSubItem } from "./navbarSubItem"; 

export const NavBarItem = ({menuItem}) => { 
    const [isActive, setisActive] = useState(false)  
    const [subitem, setsubitem] = useState(menuItem.sub)
    const [showSub, setshowSub] = useState(false)
 


    const onClick = (e) => { 
      e.preventDefault()
      let classnamechild = e.target.className 
      setisActive(true)
      if (subitem){
        if (showSub==true){
           if(classnamechild.includes('n1')){
            setshowSub(false)
           }          
        }else{
          setshowSub(true)
        }
         
      }
    }

    const onMouseOver = (e) => {   
      let nameClass = e
      console.log(nameClass);
       
      setisActive(true)
      
    }

    const onMouseOut = (e) => {   
        setisActive(false) 
    }

  return (
    
    <li className="nav-item"   onMouseOut={onMouseOut}  onMouseOver={(e)=>onMouseOver(e)}   onClick={(e)=>onClick(e)} 
    >
          
         
        <Link
          className={isActive ? 'n1 nav-link text-dark bg-light active' : 'n1 nav-link text-dark bg-light'}
          to={menuItem.url}>{menuItem.desc}
          
        </Link>
    

        {showSub &&             
             <ul className="nav flex-column mb-0"> 
               
               {subitem.map(item => 
               <NavbarSubItem key={item.id} item={item} />
                 
                 )}
             </ul>
           }

        
</li>
 
  )
}

 