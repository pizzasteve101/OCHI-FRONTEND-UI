import { motion } from 'framer-motion'
import React from 'react'

function Feature() {
    
  return (

    <div className='w-full py-20 '>
     <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-7xl tracking-tight'>Featured Projects</h1>
       
     </div>
     <div className='px-20'>
     <motion.div  initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }} className='cards w-full flex gap-10 mt-[15vw] '> 
            <motion.div  whileHover = {{scale:0.92}} transition = {{ease: [0.76, 0, 0.24, 1]}} className='cardContainer relative w-1/2 h-[75vh] '> 
            <motion.h1 className='absolute text-zinc-800 z-10 left-[14vw] translate-x-[100%] top-[3vw] -translate-y-1/2 text-8xl tracking-tighter '> FYDE
            {"FYDE".split("").map((item , index) => {
                    <motion.span className="inline-block" initial={{y:"100%"}}>{item}</motion.span>
                })}</motion.h1>
                <motion.div  className='card  w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </motion.div>
            </motion.div>
            <motion.div  whileHover = {{scale:0.92}} transition = {{ease: [0.76, 0, 0.24, 1]}} className='cardContainer relative w-1/2 h-[75vh]  '> 
              
                <div className='card  w-full h-full  rounded-xl overflow-hidden '>
                <h1 className='absolute text-zinc-400 z-10 right-[42vw] translate-x-[100%] top-[3vw] -translate-y-1/2 text-8xl tracking-tighter '> VISE
                {"VISE".split("").map((item , index) => {
                    <span>{}</span>
                })}
                </h1>
                    <img className='bg-cover w-full h-full ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
            </motion.div>
        </motion.div>
     <motion.div initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }} className='cards w-full flex gap-10 mt-[15vw] '> 
            <motion.div whileHover = {{scale:0.92}} className='cardContainer relative w-1/2 h-[75vh] '> 
            <motion.h1 className='absolute text-zinc-800 z-10 right-[78vh] translate-x-[100%] top-[3vw] -translate-y-1/2 text-8xl tracking-tighter '> CARDBOARD
            {"CARDBOARD".split("").map((item , index) => {
                    <motion.span className="inline-block" initial={{y:"100%"}}>{item}</motion.span>
                })}</motion.h1>
                <motion.div   transition = {{ease: [0.76, 0, 0.24, 1]}}  className='card  w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                </motion.div>
            </motion.div>
            <motion.div  whileHover = {{scale:0.92}} transition = {{ease: [0.76, 0, 0.24, 1]}} className='cardContainer relative w-1/2 h-[75vh]  '> 
              
                <div className='card  w-full h-full  rounded-xl overflow-hidden '>
                <h1 className='absolute text-zinc-400 z-10 right-[90vh] translate-x-[100%] top-[3vw] -translate-y-1/2 text-8xl tracking-tighter '> SPACESHIP
                {"SPACESHIP".split("").map((item , index) => {
                    <span>{}</span>
                })}
                </h1>
                    <img className='bg-cover w-full h-full ' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                </div>
            </motion.div>
        </motion.div>
     <motion.div initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }} className='cards w-full flex gap-10 mt-[15vw] '> 
            <motion.div whileHover = {{scale:0.92}} transition = {{ease: [0.76, 0, 0.24, 1]}} className='cardContainer relative w-1/2 h-[75vh] '> 
            <h1  className='absolute text-zinc-900 z-10 right-[21vw] translate-x-[100%] top-[3vw] -translate-y-1/2 text-8xl tracking-tighter '> TRAWA
            {"TRAWMA".split("").map((item , index) => {
                    <motion.span className="inline-block" initial={{y:"100%"}}>{item}</motion.span>
                })}</h1>
                <motion.div   className='card  w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                </motion.div>
            </motion.div>
            <motion.div  whileHover = {{scale:0.92  }} transition = {{ease: [0.76, 0, 0.24, 1]}} className='cardContainer relative w-1/2 h-[75vh]  '> 
              
                <div className='card  w-full h-full  rounded-xl overflow-hidden '>
                <h1 className='absolute text-zinc-400 z-10 right-[42vw] translate-x-[100%] top-[3vw] -translate-y-1/2 text-8xl tracking-tighter '> BLEND
                {"VISE".split("").map((item , index) => {
                    <span>{}</span>
                })}
                </h1>
                    <img className='bg-cover w-full h-full ' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                </div>
            </motion.div>
        </motion.div>
     </div>
    
    <div className='buttons w-full h-[15vw]  '>
        <motion.button whileHover = {{scale:1.1}} className=' text-black flex uppercase font-semibold leading-none  h-[5vw] w-[15vw] absolute left-[40%] mt-20 pt-[2vw] pl-2 rounded-full gap-2 bg-zinc-200'>view all case studies <motion.div className=' rounded-full h-[15px] w-[15px] bg-zinc-900'></motion.div>
        </motion.button>
    </div>
    <div className='clientReview h-[30vw] w-full bg-zinc-100  '>
        <div className='nav flex gap-10 text-black right-0 absolute pr-[10vw]  '>
        <button  className='links flex gap-10 z-[99] pt-10 '>
        {["Karman Ventures" , "Services:","William Barnes" , "READ" ].map((item, index) => 
        <a  key={index} className={ ` gap-10 pr-40 font-font3 ${ index === 3 && " opacity-50 , pl-[12vw]"} ${index === 0 && "underline"}` } >{item}</a>) }
       </button>
       </div>
       <div className='absolute pt-[8vw] pl-[26vw] gap-4 flex flex-col'>
        <motion.button whileHover={{scale:1.1}} className='text-black h-[2.5vw] w-[10vw] border-2 border-black rounded-full font-font3'> INVESTOR DECK</motion.button>
        <motion.button  whileHover={{scale:1.1}} className='text-black h-[2.5vw] w-[7vw] border-2 border-black rounded-full font-font3'> SALES DECK</motion.button>
       
       </div>
       <div className='absolute left-[45%] pt-[8vw]'>
        <img className='h-[7vw] w-[7vw] rounded-lg' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
            <h1 className='text-black w-[25vw] font-font3'>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</h1>
            
      </div>
      
       </div>
     </div>
  )
}

export default Feature