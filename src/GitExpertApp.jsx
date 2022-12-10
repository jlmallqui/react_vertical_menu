import { useState } from 'react'
import {AddCategory} from './AddCategory'
import {GifGrid} from './GifGrid';

export const GitExpertApp = () => {

    const [categories, setCategories] = useState([''])

    const onNewCategory = (newvalue) => {
        if (categories.includes(newvalue)) return
        
        if (newvalue=='') return

        setCategories([...categories,newvalue])

    }


    return (
    
    <>
        <h1>GitExpertApp</h1>
        <AddCategory onAddCategory ={(value)=> onNewCategory(value)}/>   
            
        {categories.map(item => (
            <GifGrid key={item} categoria={item}/>            
        )) } 

    </>)


}