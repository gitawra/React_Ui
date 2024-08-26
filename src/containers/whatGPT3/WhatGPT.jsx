import React from 'react'
import './whatGPT3.css'
import {Feature} from '../../components'

const WhatGPT = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="The GUID Partition Table (GPT) is a standard for the layout of partition tables of a physical computer storage device, such as a hard disk drive or solid-state drive, using universally unique identifiers, which are also known as globally unique identifiers (GUIDs)."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The Possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="
A chatbot (coined from the term “chat robot”) is a computer program that simulates human conversation either by voice or text communication, and is designed to help solve a problem. "/>
        <Feature title="Knowledgebase" text="
A knowledge base is a published collection of documentation that includes answers to frequently asked questions, how-to guides, and troubleshooting instructions. "/>
        <Feature title="Education" text="
Image result for what is education
Education refers to the discipline that is concerned with methods of teaching and learning in schools or school-like environments, as opposed to various nonformal and informal means of socialization."/>
      </div>
    </div>
  )
}

export default WhatGPT