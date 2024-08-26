import React from 'react'
import './article.css'

const Article = ({imgUrl,date,title,base}) => {
  return (
    <div className='gpt3__blog-container_artical'>
      <div className="gpt3__blog-container_artical-image">
        <img src={imgUrl} alt="blogimg" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>{base}</p>
      </div>
    </div>
  )
}

export default Article