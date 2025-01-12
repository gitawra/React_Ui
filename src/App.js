import React from 'react'
import './App.css'
import {Article, Brand, CTA, Navbar} from './components'
import {Footer, Blog, Possibility, Feature, WhatGPT, Header} from './containers'

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT/>
      <Feature/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App