import React from 'react'
import { useValue } from '../context'

export const Cart = () => {
const {articles}=useValue();

  return (
    <>
   <h2>Wishlist / Cart</h2>
   {articles.map((item)=>(
<img style={{margin:"10px"}} height="400px" width="400px" src={item.urlToImage} />

))}
  

    </>
  )
}
