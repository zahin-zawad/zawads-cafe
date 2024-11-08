"use client"

import React, { useState } from 'react'
import BgImage from '@/public/Images/HeroSectionImages/bg-slate.png'
import CoffeeMug from '@/public/Images/HeroSectionImages/black.png'
import NavBar from './NavBar'
import {motion} from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const bgImage = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}

export default function HeroSection() {

    const [sidebar, setSidebar] = useState<boolean>(false);
  return (
    <main style={bgImage}>
        <section className='min-h-[750px] w-full'>
            <div className="container">
                {/* navbar section */}
                <NavBar sidebar={sidebar} setSidebar={setSidebar}/>
                {/* Hero section */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>

                    {/* text content section */}
                    <div className='text-lightOrange mt-24 md:mt-0 p-4 space-y-28'>
                        <motion.h1 
                        initial={{opacity:0, y: -100}} 
                        animate={{opacity:1 , y: 0}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 1,
                        }}
                        className='text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</motion.h1>
                        <motion.div
                        initial={{opacity:0, y: 100}} 
                        animate={{opacity:1 , y: 0}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 1.2,
                        }}
                         className='relative'>
                            <div className='z-10 relative space-y-4'>
                                <h1 className='text-2xl'>Black Lifestyle Lovers,</h1>
                                <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit distinctio totam quo et, nobis alias architecto nemo aspernatur necessitatibus excepturi ipsam quam,</h1>
                            </div>
                            <div className='w-64 h-48 absolute -top-6 -left-10 bg-gray-700/25'></div>
                        </motion.div>
                    </div>
                    {/* hero image section */}
                    <div className='relative'>
                        <motion.img
                        initial={{opacity:0, scale: 0}} 
                        animate={{opacity:1 , scale: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: .4,
                        }}
                         src={CoffeeMug.src} alt="CoffeeMug" className='relative z-40 h-96 md:h-[700px] img-shadow' />
                        {/* orange ring */}
                        <motion.div 
                        initial={{opacity:0, y: 100}} 
                        animate={{opacity:1 , y: 0}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 1.2,
                        }}
                        className='h-44 w-44 absolute top-24 -right-16 border-primary border-[20px] rounded-full z-20'></motion.div>
                        {/* big text section  */}
                        <motion.div 
                        initial={{opacity:0, x: -100}} 
                        animate={{opacity:1 , x: 0}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: .8,
                        }}
                        className='absolute -top-20 left-52 z-10'>
                        <h1 className='text-9xl scale-150 font-bold text-darkGray/40 leading-none'>Blvck Tumbler</h1>
                        </motion.div>
                    </div>

                    {/* third div section  */}
                    <motion.div
                    initial={{opacity:0, y: 100}} 
                    animate={{opacity:1 , y: 0}}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 1.2,
                    }}
                     className='text-lightOrange mt-24 md:mt-0 p-4 space-y-28'>
                        <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</h1>
                        <div className='relative'>
                            <div className='z-10 relative space-y-4'>
                                <h1 className='text-2xl'>Blvck Lovers</h1>
                                <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit distinctio totam quo et, nobis alias architecto nemo aspernatur necessitatibus excepturi ipsam quam,</h1>
                            </div>
                            <div className='w-64 h-48 absolute -top-6 -right-10 bg-darkGray/50'></div>
                        </div>
                    </motion.div>
                    <div></div>
                </div>
            </div>
            {/* sidebar menu section  */}
            {
                sidebar && (
                    <motion.div
                    initial={{x: "100%"}} 
                    whileInView={{x: 0}}
                    className='absolute top-0 right-0 w-36 h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10 '>
            <div className='h-full w-full flex justify-center items-center '>
                <div className='flex flex-col justify-center items-center gap-6 text-white'>
                    {/* line  */}
                    <div className='h-[70px] w-[1px] bg-white'></div>

                    <div className='inline-block p-2 rounded-full cursor-pointer border border-white hover:bg-slate-500'>
                        <FaFacebookF className='text-2xl'/>
                    </div>
                    <div className='inline-block p-2 rounded-full cursor-pointer border border-white hover:bg-slate-500'>
                        <FaTwitter className='text-2xl'/>
                    </div>
                    <div className='inline-block p-2 rounded-full cursor-pointer border border-white hover:bg-slate-500'>
                        <FaInstagram className='text-2xl'/>
                    </div>


                    <div className='h-[70px] w-[1px] bg-white'></div>
                </div>
                </div>
            </motion.div>
                )
            }

        </section>

    </main>
  )
}
