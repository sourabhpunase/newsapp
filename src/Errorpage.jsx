import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Errorpage() {
 const navigate=useNavigate();
 useEffect(()=>{
    setTimeout(()=>navigate('/'),3000)
 },[])
 
    return (
    <><main>
        <h1>oops theres some error please try again!</h1>
        </main></>
  )
}
