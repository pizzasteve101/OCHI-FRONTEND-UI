
import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function Landing() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='h-[22vw] w-full absolute overflow-hidden '>
        <motion.div  whileHover={{scale:1.2}} initial={{x:100}} animate={{x:0}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.3}} className='bg-red-500 h-[10vw] w-[5vw] pt-[5vw] absolute right-0 top-[10vw] rounded '>
          <h1 className=' -rotate-90 font-bold text-[20px] leading-none '>Site of the day</h1>


        </motion.div>
      </div>
      <div className='textStructure mt-40 px-20'>
        {["we create", "eye opening", "presentation"].map
          ((item, index) => {
            return <div className='masker'>
              <div className="w-fit flex items-center overflow-hidden">
                
                {index === 1 && (<motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }} className=" w-[9vw] h-[5.5vw] rounded-md bg-green-400 relative top-2">
                  <img className='object-cover h-full rounded-md ' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                </motion.div>)}
                
                <motion.h1 initial = {{x:-400}}  animate={{x:0}} transition = {{ ease: [0.76, 0, 0.24, 1], duration: 1}} className='uppercase leading-[7vw] 
                tracking-tighter font-medium text-[7.5vw] '>{item}</motion.h1>

              </div>

            </div>
          })}


      </div>
      <motion.div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between 
        items-center py-5 px-20">
        {["pubic and private companies", "from first pitch to last IPO"].map
          ((item, index) => {
            return <motion.button whileHover = {{scale:1.1}}  className="text-md font-light
             tracking-tight 
             leading-none">{item}</motion.button>

          })}
        <motion.div className="start flex item-center  gap-5">
          <motion.p whileHover ={{scale:1.1}}
            className="px-5 py-2 border-[1px]
             border-zinc-500 font-md
              rounded-full uppercase text-s">start the project
          </motion.p>

          <motion.div whileHover = {{scale:1.1}} className="w-10 h-10 flex items-center justify-center border-[2px]
             border-zinc-500 rounded-full ">
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span></motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Landing
