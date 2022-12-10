import React, { useState } from 'react'
import {NavBarItem} from './navBarItem'

const menus = [
    {
        id:"1",
        desc:"Seguridad",
        url:"/"
    },
    {
        id:"2",
        desc:"Clientes",
        url:"/customers",
        sub:[
            {
                id:"10",
                desc:"Client 1",
                url:"/home"
            },
            {
                id:"1201",
                desc:"Client 2",
                url:"/home"
            },
            {
                id:"1221",
                desc:"Client 3",
                url:"/home"
            }
        ]
    },
    {
        id:"3",
        desc:"Tablas Generales",
        url:"/commons"
    },
    {
        id:"4",
        desc:"Home",
        url:"/home"
    },
    {
        id:"5",
        desc:"Contactenos",
        url:"/contact",
        sub:[
            {
                id:"100",
                desc:"Contact 1",
                url:"/home"
            },
            {
                id:"101",
                desc:"Contact 2",
                url:"/home"
            }
            ,
            {
                id:"103",
                desc:"Contact 3",
                url:"/home"
            }
            ,
            {
                id:"106",
                desc:"Contact 4",
                url:"/home"
            }
        ]
    }

]
export const NavBar = () => {

    const [menu, setMenu] = useState(menus)
    const [isActive, setisActive] = useState(false)
    const liStyle = {float:'right'}

    const onClick = () =>  {
        setisActive(!isActive)
    }


  return (
    <div className="container-fluid">
        <button onClick={onClick}> 
            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg> 
        </button>

    <div  className={isActive ? 'vertical-nav bg-white active' : 'vertical-nav bg-white'}  id="sidebar">
        
        <div className="py-4 px-3 mb-4 bg-light">
            <button style={liStyle} onClick={onClick} > 
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg> 
            </button>
        

            <div className="media d-flex align-items-center">
                <img src="https://bootstrapious.com/i/snippets/sn-v-nav/avatar.png" alt="..." width="65" 
                    className="mr-3 rounded-circle img-thumbnail shadow-sm"/>
                <div className="media-body">
                <h4 className="m-0">Jose Mallqui</h4>
                <p className="font-weight-light text-muted mb-0">Web developer</p>
                </div>
            </div>
            <div className=" align-items-center">
                <h6>jose@email.com</h6>
            </div>
            
            <hr />
            <ul className="nav flex-column bg-white mb-0">       
            {menu.map(item =>(            
                <NavBarItem key={item.id} menuItem={item}/>            
            ))}
            </ul>
        </div>
    </div>
    </div>
  )
}
