import React from 'react'
import {Artical} from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './import'
import './blog.css'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Dou you want to step into the future before others.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Artical imgUrl={blog01} date="feb 16, 2023" title="GPT-3 and open AI is the future. Let us explore how it is?" base="Read full Article"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Artical imgUrl={blog02} date="feb 16, 2023" title="GPT-3 and open AI is the future. Let us explore how it is?" base="Read full Article"/>
          <Artical imgUrl={blog03} date="feb 16, 2023" title="GPT-3 and open AI is the future. Let us explore how it is?" base="Read full Article"/>
          <Artical imgUrl={blog04} date="feb 16, 2023" title="GPT-3 and open AI is the future. Let us explore how it is?" base="Read full Article"/>
          <Artical imgUrl={blog05} date="feb 16, 2023" title="GPT-3 and open AI is the future. Let us explore how it is?" base="Read full Article"/>
        </div>
      </div>
    </div>
  )
}

export default Blog