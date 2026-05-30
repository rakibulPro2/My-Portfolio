import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Work from '../components/Work'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Work />
    </>
    
  )
}
