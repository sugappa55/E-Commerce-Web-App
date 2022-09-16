import React from 'react'
import { useState } from 'react'

const EntityCard = ({product}) => {
  let [image,setImage]=useState(product.images[0])
  const onHover=()=>{
    setImage(product.images[1])
  }
  const onHoverOut=()=>{
    setImage(product.images[0])
  }

  return (
    <div onMouseEnter={onHover} onMouseLeave={onHoverOut}>
      <img src={image} alt="data" />
      <p>{product.name}|{product.color}|{product.gender}</p>
      
    </div>
  )
}

export default EntityCard
