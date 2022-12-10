import React, { useState } from 'react'

import { Recibo_Sec_Sub } from './Recibo_Sec_Sub';

export const Recibo_Sec = ({seccion}) => {
    const [secciones, setSecciones] = useState(seccion)
 

 
    

  return (
    
    <>
        <button onClick={onAddItem}> otros   tech </button>
        {secciones.map((seccion , id)=> 
   
        <div key={id}  >  
        <h1>{seccion.name}  </h1> 
         <Recibo_Sec_Sub seccion={seccion}/>        
        </div> 
                
    
    
  )
}
    
    </>
    
  
  )
}
