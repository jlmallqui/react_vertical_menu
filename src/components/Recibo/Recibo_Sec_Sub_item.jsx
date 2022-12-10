import React, { useState } from 'react'






export const Recibo_Sec_Sub_item = ({sec_item,eliminarSubSeccionId,updateSubSeccion}) => {
    
  // const [subSeccion, setSubSeccion] = useState(sec_item)
  const [name, setName] = useState(sec_item.name)
  const [precio, setprecio] = useState(sec_item.precio)
  const [id, setId] = useState(sec_item.id)
 

  const onChangeName = ({target}) =>{
    setName(target.value)
    onUpdateItem(id,target.value,precio)
  }

  const onChangePrecio = ({target}) =>{   
    if(target.value>=0){
      setprecio(target.value)  
      onUpdateItem(id,name,target.value)
    }     
  }
    
  const onDelete = (id) =>{   
    let tipo = 'DEL'
    updateSubSeccion(tipo,sec_item)
  }  

  const onUpdateItem = (id,name,precio) =>{
    console.log(id,name,precio);
      let newItem = {
        id,name,precio
      }
      let tipo = 'UPD'
      updateSubSeccion(tipo,newItem)      
    }     

  return (  
      
          <div key={id} > 
            <div className='row g-3 align-items-center'>
              <div className="col-auto  visually-hidden"> 
                <input type="text" className=''  disabled defaultValue={id}/>
              </div> 
              <div className="col-auto">  
                <input type="text"  className='form-control-sm' placeholder='Descripcion' value={name} onChange={onChangeName}/>
              </div> 
              <div className="col-auto"> 
                <input type="text"  className='form-control-sm' placeholder='Precio' value={precio} onChange={onChangePrecio}/>
                <button onClick={()=> onDelete(id)}> Eliminar</button>
              </div> 
            </div> 
          </div>
        
  )
}
