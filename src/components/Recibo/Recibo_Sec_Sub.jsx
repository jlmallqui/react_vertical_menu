import React, { useState } from 'react'
import { Recibo_Sec_Sub_item } from './Recibo_Sec_Sub_item';


export const Recibo_Sec_Sub = ({seccion, onUpdateSeccionItemId, onEliminarSeccion}) => {


    const [subSecciones, setSubSecciones] = useState(seccion.sec_item)
    
    const onAddItem = () =>{    
        let newItem    = {
            id:uuidv4(),
            name:"",
            precio:''
        }
        onUpdateSeccionItemId('INS',newItem)
    }

    const EliminarSeccion = (id) => {
        onEliminarSeccion(id)
    } 

    const onUpdateSubSeccion = (tipo,newItem) => { 
        onUpdateSeccionItemId(tipo,newItem)
    }
 
  return ( 
    
    <>
        <div className='servicios'>
            <h1 className='seccion-title'>{seccion.name}  </h1> 
            <button className='seccion-cerrar' onClick={e => EliminarSeccion(seccion.id)}> x </button>
        </div>
        {subSecciones.map(item  =>        
         <Recibo_Sec_Sub_item  
         key={item.id} sec_item={item}            
         updateSubSeccion={(tipo,newItem)=>onUpdateSubSeccion(tipo,newItem)}
         />             
        )}
        <button onClick={onAddItem}> add </button>
    </> 

  )
}


function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  