import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { NavbarSubItem } from "./navbarSubItem";

export const NavBarItem = ({ menuItem }) => {
  const [subitem, setsubitem] = useState(menuItem.sub)
  const [isActive, setisActive] = useState(false)
  const [showSub, setshowSub] = useState(false)

  const onClick = (e) => {
    let classnamechild  = ''
    classnamechild = e.target.className 
    if (typeof(classnamechild) =='object' ) {
      classnamechild  = 'n1'
    } 
   
   
    setisActive(true)
    if (subitem) {
      if (showSub == true) { 
        if (classnamechild.includes('n1')) {
          setshowSub(false)
        }
      } else {
        setshowSub(true)
      }
    }
  }

  const onMouseOver = (e) => {
    setisActive(true)
  }

  const onMouseOut = (e) => {
    setisActive(false)
  }

  const onClickMenu = () => {
    setshowSub(false)
  }


  return (

    <li className="nav-item" onMouseOut={onMouseOut} onMouseOver={(e) => onMouseOver(e)} onClick={(e) => onClick(e)}
    >


      <Link
        className={isActive ? 'n1 nav-link text-dark bg-light menu_active' : 'n1 nav-link text-dark bg-light'}
        to={menuItem.url}>{menuItem.desc}
        {subitem &&
          <div className='float-end'>
            {showSub ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="n1" viewBox="0 0 16 16">
                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="n1" viewBox="0 0 16 16">
                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
              </svg>

            )
            }
          </div>

        }


      </Link>


      {showSub &&
        <ul className={isActive ? "nav flex-column mb-0 item-n1" : 'nav flex-column mb-0'}>
          {subitem.map(item =>
            <NavbarSubItem key={item.id} item={item} onClickMenu={onClickMenu} />

          )}
        </ul>
      }


    </li>

  )
}

