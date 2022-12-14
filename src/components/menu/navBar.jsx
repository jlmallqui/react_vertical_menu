import React, { useState } from 'react'
import { NavBarItem } from './navBarItem'

const menus = [
    {
        id: "1",
        desc: "Seguridad",
        url: "/",
        sub: [
            {
                id: "11",
                desc: "usuarios",
                url: "/usuario"
            },
            {
                id: "112",
                desc: "modulos",
                url: "/module"
            },
            {
                id: "12012",
                desc: "roles",
                url: "/rol"
            }
        ]
    },
    {
        id: "2",
        desc: "Clientes",
        url: "#",
        sub: [
            {
                id: "10",
                desc: "Client 1",
                url: "/home"
            },
            {
                id: "1201",
                desc: "Client 2",
                url: "/home"
            }
        ]
    },
    {
        id: "3",
        desc: "Tablas Generales",
        url: "#"
    },
    {
        id: "4",
        desc: "Home",
        url: "/home"
    },
    {
        id: "5",
        desc: "Contactenos",
        url: "/contact",
        sub: [
            {
                id: "100",
                desc: "Contact 1",
                url: "/home"
            },
            {
                id: "101",
                desc: "Contact 2",
                url: "/home"
            }
            ,
            {
                id: "103",
                desc: "Contact 2",
                url: "/home"
            }
            ,
            {
                id: "106",
                desc: "Contact 2",
                url: "/home"
            }
        ]
    }

]
export const NavBar = ({ children }) => {

    const [menu, setMenu] = useState(menus)
    const [isActive, setisActive] = useState(false)
    const liStyle = { float: 'right' }

    // sessionStorage.setItem("item_key", '123456');
    // var item_value = sessionStorage.getItem("item_key");
    // console.log(item_value);

    // localStorage.setItem("key", "jsoe luis mallqui")
    const onClick = () => {
        setisActive(!isActive)
    }


    return (
        <>
            <div className="container-fluid">

                <div className={isActive ? 'vertical-nav bg-white active' : 'vertical-nav bg-white'} id="sidebar">

                    <div className="py-4 px-3 mb-4 bg-light">
                        <button className='btn toggle-bar' style={liStyle} onClick={onClick} title="mostrar / ocultar menu" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </button>


                        <div className='user-profile'>
                            <img src="https://bootstrapious.com/i/snippets/sn-v-nav/avatar.png" alt="..." width="65"
                                className="rounded-circle img-thumbnail mx-auto d-block" />
                            <h4 className="mx-auto d-block"  >Jose Mallqui</h4>
                            <p className="font-weight-light text-muted mb-0">jose@email.com</p>
                        </div>

                        <hr />

                        <ul className="nav flex-column bg-white mb-0">
                            {menu.map(item => (
                                <NavBarItem key={item.id} menuItem={item} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={isActive ? 'page-content p-5 active' : 'page-content p-5'} id="content">
                <button className='btn toggle-bar' style={liStyle} onClick={onClick} title="mostrar / ocultar menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
                {children}
            </div>

        </>
    )
}
