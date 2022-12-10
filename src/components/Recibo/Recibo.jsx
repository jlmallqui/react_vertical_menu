import React, { useEffect, useState } from 'react'
import { Recibo_Sec } from './Recibo_Sec';
import { Recibo_Sec_Sub } from './Recibo_Sec_Sub';




export const Recibo = () => {

    let recibo = {
        nombre:" Creacion de recibos",
        secciones:[
            {
                id:"1",
                name:"seccion 1",
                sec_item:[
                    {
                        id:"11",
                        name:"Sub Item 1 1 ",
                        precio:0,
                    },
                    {
                        id:"12",
                        name:"Sub Item 1 2",
                        precio:0,
                    },
                ]
            },
            {
                id:"2",
                name:"seccion 2",
                sec_item:[
                    {
                        id:"21",
                        name:"Sub Item 2 1",
                        precio:0,
                    },
                    {
                        id:"22",
                        name:"Sub Item 2 2",
                        precio:0,
                    },
                    {
                        id:"23",
                        name:"Sub Item 2 3",
                        precio:0,
                    },
                ]
            },

        ]
    }


    const [secciones, setSecciones] = useState([])
    const [secName, setSecName] = useState('')    
 
    const onChangeName = (e) => {
        e.preventDefault()
        setSecName(e.target.value)
    }
       
    const onRegistrar = () => {
        console.log('listar nuevas secciones');
        console.log(secciones);
    }

    const AddSecc = (e) => {   
    
        let nuevaseccion =  {
            id:uuidv4(),
            name:secName,
            sec_item:[
                {
                    id:uuidv4(),
                    name:"",
                    precio:0,
                },
            ]
        }   
        let sec = [...secciones,nuevaseccion]
        setSecName('')
        setSecciones(sec)
    }
 
    const eliminarSeccionId = (id) => {    
        var  lista = [...secciones] 
        console.log(lista);
        lista.forEach(function(currentValue, index, arr){
        if(lista[index].id===id ){ 
            console.log(index);
            lista.splice(index, 1);    
        }})  
        setSecciones(lista)
    }



    const updateSeccionItemId = (tipo,seccion,newitem) => { 
        console.log(tipo,seccion,newitem);

        let SeccionId = seccion.id
        let SeccionItemId = newitem.id
        let SeccionIndex = 0    
        let  lista = [...secciones] 
        
        
        lista.forEach(function(currentValue, index, arr){
            if(lista[index].id===SeccionId ){ 
                SeccionIndex    =   index
            }})
        
        console.log(SeccionIndex);

        if (tipo=='INS'){
            lista[SeccionIndex].sec_item.push(newitem)
        }else{
            lista[SeccionIndex].sec_item.forEach(function(currentValue, index, arr){
                if(lista[SeccionIndex].sec_item[index].id===SeccionItemId ){ 
                    if (tipo=='DEL'){
                        lista[SeccionIndex].sec_item.splice(index, 1); 
                    }else{
                        lista[SeccionIndex].sec_item.splice(index, 1,newitem); 
                    }
         
                    
                }
            }) 
        }
         
        setSecciones(lista)
    }

   
   
    return (
        <div>
            <h1>Sistemas Web para tu empresa</h1>
            <h1>{recibo.nombre}</h1>
            <input type="text" placeholder='Nombre del recibo' value={secName} onChange={onChangeName}/> 
            <button onClick={AddSecc}>Add Seccion</button> 
            <div className="row">

            
            
            {secciones.map((seccion , id)=>      
            <div key={id}  className='card' >                 
                {
                    <Recibo_Sec_Sub 
                    seccion={seccion} 
                    onEliminarSeccion={value=>eliminarSeccionId(value)}                     
                    onUpdateSeccionItemId ={(tipo,item)=>updateSeccionItemId(tipo,seccion,item)}
                    />
                }
                
            </div>  
            )}
            </div>
            <button onClick={onRegistrar}>MOSTRAR LISTADO</button>
        </div>
   
   )

 
}


function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  

