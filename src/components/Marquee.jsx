import React from 'react'
import { motion } from "framer-motion"
function Marquee() {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed=".1" className=' w-full h-[50vh] py-20 rounded-tl-3xl 
    rounded-tr-3xl bg-[#004D43]'>
     <div className='text border-t-2 border-b-2 border-zinc-200 overflow-hidden flex whitespace-nowrap uppercase  ' > 
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration: 7 }} className=' font-body text-[12vw] leading-none   pt-10 pr-10'>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration: 7 }} className='font-body text-[12vw] leading-none font-medium  pt-10 pr-10'>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration: 7 }} className='font-body text-[12vw] leading-none font-medium  pt-10 pr-10'>we are ochi</motion.h1>
     </div>
    </div>
  )
}

export default Marquee