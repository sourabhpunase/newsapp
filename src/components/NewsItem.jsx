import React from 'react'

import a from '../news.jpg'
import { NavLink } from 'react-router-dom'
import { Newid } from './Newid'
import { useValue } from '../context'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebaseinit'
export const NewsItem = ({title,desc,src,url}) => {
   
async function handleSubmit (e){
  e.preventDefault()
  try{
const docRef=await addDoc(collection(db,"news"),{
article:{desc},
author:{title}

})  

  }
  catch(error){
    console.log('erro', error)
  }
} 

    
    return (
   
<div  className="card bg-dark text-light mb-4   d-inline-block my-4 mx-5 px-1 py-1" style={{maxWidth:"345px"}}>
  <img src={src?src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIjDOkRFnfaY9S4kzuC5YmRVRSJjwrgCIyeg&usqp=CAU'} style={{height:"200px",width:"330px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    {/* <p className="card-text">{desc?desc.slice(0,90):"Residents have been celebrating Ms Nicholson's birthday, for more reasons than one - her birthday is expected to provide a small boost to the city's economy, as she will soon be looking to purchase new spectacles, arthritis cream, extra-strength wrinkle lotion, and a zimmer frame."}</p> */}
  
    <button onSubmit={handleSubmit}  >Add to Favourite</button>
  </div>
  <Newid/>
  
</div>



    
  )
}
