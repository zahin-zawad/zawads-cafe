"use client"

import React from 'react'
import bgImage from '@/public/Images/AppDownloadBannerImages/coffee-cover.jpg'
import appStore from '@/public/Images/AppDownloadBannerImages/app_store.png'
import playStore from '@/public/Images/AppDownloadBannerImages/play_store.png'

import {motion} from 'framer-motion'

const bannerStyle = {
    backgroundImage: `url(${bgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
}


export default function AppDownloadBanner() {
  return (
    <div className='container my-14'>
        <div style={bannerStyle}
        className='sm:min-h-96 sm:flex sm:justify-end sm:items-center rounded-xl'>
            <div>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <motion.h1
                    initial={{opacity:0, y: 100}} 
                    whileInView={{opacity:1 , y: 0}}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: .2,
                    }}  
                    className='text-2xl sm:text-4xl text-center font-semibold'>Download the app</motion.h1>
                    <motion.p
                    initial={{opacity:0, y: 100}} 
                    whileInView={{opacity:1 , y: 0}}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: .3,
                    }} 
                     className='text-center sm:px-20'>Lorem ipsum dolor sit amet consedolor sit amet consectetur adipisicing elit. Officiis</motion.p>
                    <div className='flex justify-center items-center gap-4'>
                        <a href="#"
                        className='max-w-36 sm:max-w-28 md:max-w-48'>
                            <motion.img
                            initial={{opacity:0, y: 100}} 
                            whileInView={{opacity:1 , y: 0}}
                            transition={{
                                type: "spring",
                                stiffness: 150,
                                damping: 10,
                                delay: .4,
                            }} 
                             src={playStore.src} alt="" />
                        </a>
                        <a href="#"
                        className='max-w-36 sm:max-w-28 md:max-w-48'>
                            <motion.img
                            initial={{opacity:0, y: 100}} 
                            whileInView={{opacity:1 , y: 0}}
                            transition={{
                                type: "spring",
                                stiffness: 150,
                                damping: 10,
                                delay: .5,
                            }} 
                             src={appStore.src} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
