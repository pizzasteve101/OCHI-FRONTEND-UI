import React from 'react'
import { motion } from "framer-motion"
function About() {
    
    return (
        <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl
     rounded-tr-3xl">
            <h1 className='text-zinc-900 text-[4vw] 
        p-20  tracking-tight font-font3  leading-none
         '>Ochi is a strategic partner for 
         fast-growing tech businesses that need to <span className='underline'>raise funds ,sell products, explain complex ideas</span> 
         , and <span className='underline'> hire great 
         people</span> .</h1>
         <div className='h-[60vh] w-full bg-[#CDEA68] border-t-2 pr-[50vh] leading-[1.5] justify-end border-zinc-700 flex justify-between pt-10'>
            <h1 className='sidetext text-black '>What you can expect:</h1>


            <p className='text-black h-full w-1/4 text-md right-0 font-font3 font-light '>
            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.  
            <br /> 
            
            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating
            </p>
           

         </div>
         <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#0d0f08]'>
            
            <div className='w-1/2 '>
            <h1 className='text-7xl text-black font-medium'>Our Approach:</h1>
            
            <motion.button whileHover ={{scale : 1.1}} transition = {{ ease: [0.76, 0, 0.24, 1]}} className='px-10 py-6 mt-10 bg-zinc-900
             rounded-full uppercase
             text-white flex gap-10 items-center '>Read more
             <motion.div whileHover = {{scale : 2}} className='w-2 h-2 bg-zinc-100 rounded-full '></motion.div></motion.button> 
                </div>
                <div className='w-1/2 h-[70vh] rounded-3xl '> <motion.img transition={{ease: [0.76, 0, 0.24, 1]}} whileHover = {{ scale : 1.1}} className='object-cover h-full w-full rounded-xl' src=" https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg "/> </div>
         </div>
        </div>
    )
}

export default About