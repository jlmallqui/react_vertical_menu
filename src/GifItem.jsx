import React from 'react'

export const GifItem = ({item}) => {
  return (
    <div className='card'>
        <img src={item.url} alt={item.title} height="300" width="250" />    
        <p>{item.title}</p>
        
    </div>
  )
}
