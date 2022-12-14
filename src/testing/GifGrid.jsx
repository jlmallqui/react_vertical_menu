import { useEffect, useState } from "react"

import {getGifs} from '../helpers/GetGif'
import {GifItem } from "./GifItem";



export const GifGrid = ({categoria}) => { 
    const [images, setImages] = useState([])


    const getImages = async() => {
        const newImages = await getGifs(categoria)
        setImages(newImages)
    }

    useEffect(() => {
        getImages()
       
    }, [])
    
    

        
    return (
        <>
        <h1>{categoria}</h1>

        <div className="card-grid">
            {images.map(item =>(
              <GifItem key={item.id} item={item}/>      
            ))} 

        </div>
        
        </>
    )

}
