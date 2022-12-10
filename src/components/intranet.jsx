import React from 'react'

import {NavBar} from './menu/navBar'
import {Recibo} from './Recibo/Recibo'
import {Contact} from '../site/sites'

export const Intranet = () => {
  return (
   <>
        
        <div className="vertical-nav bg-white" id="sidebar">
          <NavBar/>
        </div>
        <div className="page-content p-5" id="content">
          <Contact/>
        </div>
        
   </>

  )
}
