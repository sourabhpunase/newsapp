import React from 'react'
import { useValue } from '../context'
import { Link, NavLink } from 'react-router-dom'
export const Newid = () => {
    const {articles}=useValue();
  return (
    <div>
<p>Read More</p>
{articles.map((item)=>(
 <Link style={{
    marginTop:"5px",
    color:'#C5B0AC',textDecoration:"none", background:"#2F110B", border:"2px solid aliceblue",borderRadius:"5px", fontWeight:"600" }} to={`/${item.title}`}>.</Link>

))}


    </div>
  )
}
