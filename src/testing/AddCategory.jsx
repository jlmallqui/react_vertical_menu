import { useState } from "react"


export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onChangeValue = ({target}) => {
        setInputValue(target.value.trim())
    }

    const onSubmit = (e) =>{
        e.preventDefault(); 
        onAddCategory(inputValue)
        setInputValue('')

    }


    return (

        <>
            <form action="" onSubmit={onSubmit}>
                <input type="text"  placeholder="Buscar Gifs" value = {inputValue} onChange={onChangeValue}/>
                <button>agregar </button>

            </form>
            
        </>
    )






}