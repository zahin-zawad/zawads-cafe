"use client"

import React from 'react'
import worldmap from '@/public/Images/WhereToBuyImages/world-map.png'
import {motion} from 'framer-motion'


export default function WhereToBuy() {
  return (
    <div className='container my-36'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>
            {/* forms section  */}
            <div className='space-y-8'>
                <motion.h1 
                initial={{opacity:0, y: 100}} 
                whileInView={{opacity:1 , y: 0}}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: .2,
                }} 
                className='text-4xl font-bold font-serif text-darkGray'>Buy our products from anywhere</motion.h1>
                <motion.div
                 initial={{opacity:0, y: 100}} 
                 whileInView={{opacity:1 , y: 0}}
                 transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                     delay: .4,
                 }}
                 className='flex items-center gap-4'>
                    <input type="text" placeholder='Name' className='input-style w-full lg:w-36'/>
                    <input type="email" placeholder='Email' className='input-style w-full' />
                </motion.div>
                <motion.div
                initial={{opacity:0, y: 100}} 
                whileInView={{opacity:1 , y: 0}}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: .6,
                }} 
                className='flex items-center gap-4'>
                    <input type="text" placeholder='Country' className='input-style w-full '/>
                    <input type="email" placeholder='Zip Code' className='input-style w-full lg:w-36' />
                </motion.div>
                <motion.button
                initial={{opacity:0, y: 100}} 
                whileInView={{opacity:1 , y: 0}}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: .8,
                }} 
                className='primary-btn w-full'>Order Now</motion.button>
            </div>
            {/* maps section  */}
            <div className='col-span-2'>
                <motion.img
                initial={{opacity:0, scale: 0}} 
                whileInView={{opacity:1 , scale: 1}}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: .2,
                }}  
                src={worldmap.src} alt="" className='w-full sm:w-[500px] mx-auto' />
            </div>
        </div>
    </div>
  )
}
