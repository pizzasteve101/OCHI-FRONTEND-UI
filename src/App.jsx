import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from "framer-motion"


function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900  '>
    <Navbar/>
    <Landing/>
    <Marquee/>
    <About/>
    <Eyes/>
    <Feature/>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default App