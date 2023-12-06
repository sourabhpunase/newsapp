import React from 'react'
import { useValue } from '../context'
import { Link, useParams } from 'react-router-dom';
import './nav.css'
export const NewsDetails = () => {
const {itemId}=useParams()

    const {articles,setArticles}=useValue();
    const item=articles.find((item)=>item.title===itemId)

  return (
    <div className='details'>
    <div className="details-container">
    <h1>{item.title}</h1>
    <div className="image">
    <img src= {item.urlToImage}/>
    <button className='full-article'><Link to={item.url}>Full article</Link></button>
 

    </div>
    <div className="desc">
<h3>{item.description}</h3>
<p>{item.content}</p>

   </div>


    </div>



    </div>
  )
}
