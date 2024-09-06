import { motion } from 'framer-motion'
import React from 'react'


function Cards() {
  return (
    
    <div className=' w-full h-[50vw] flex items-center gap-5 px-32 bg-zinc-900'>
        <div className='cardcotainer h-[50vh] w-1/2 pr-3 '>
        <motion.div whileHover={{scale:1.1}} className='card w-full rounded-xl h-full  bg-[#004D43]  flex items-center justify-center'>
          <img className=' w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        </motion.div>
            </div>
        <div className='cardcotainer flex gap-5 w-1/2 h-[50vh] '>
        <motion.div  whileHover={{scale:1.1}} className='card w-1/2 rounded-xl h-full bg-[#013029]'> <img className='pt-[10vw] pl-[6vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" /> </motion.div>
        <motion.div   whileHover={{scale:1.1}} className='card w-1/2 rounded-xl h-full bg-[#212121] pt-[8vw] pl-[6vw] '> <img className='h-[7vw]  ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" /> 
         <button></button>
         <div className='EYES'></div>
        </motion.div>

            </div>
            
    </div>
    
    
  )
}

export default Cards