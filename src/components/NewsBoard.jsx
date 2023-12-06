import React, { useContext, useEffect, useState } from 'react'
import { NewsItem } from './NewsItem';
import { API } from '../api';

import { newsContext, useValue } from '../context';

export const NewsBoard = () => {

const {category,articles,setArticles}=useValue();



useEffect(()=>{
let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API}`
fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles))
},[category])


  return (
    <div>
<h2 className='text-center'>Latest <span className='badge bg-danger'>News</span> </h2>
<div className="item">
{articles.map((news,index)=>{
    return <NewsItem key={index} title={news.title}
    desc={news.description}
    src={news.urlToImage}
    url={news.url}
  
    
    />
    

})}
{/* {articles.map((news,index)=>{
    return <NewsItem />
})} */}
</div>
    </div>
  )
}
