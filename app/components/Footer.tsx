"use client"

import React from 'react'
import { FaFacebook,FaInstagram,FaTelegram,FaGoogle,FaPhone } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import creditCards from '@/public/Images/FooterImages/credit-cards.webp'
import {motion} from 'framer-motion'


export default function Footer() {
  return (
    <div className='bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* comapany details  */}
                <motion.div 
                initial={{opacity:0, y: 100}} 
                whileInView={{opacity:1 , y: 0}}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: .5,
                }} 
                className='space-y-6'>
                    <h1 className='text-3xl font-bold uppercase'>Zawad&apos;s Cafe</h1>
                    <p className='text-sm max-w-72'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero, praesentium ab atque? Quidem maxime, numquam dolores</p>
                    <div>
                        <p className='flex items-center gap-2 mt-2'>
                            <FaPhone/>
                            +1 (123) 456-7890
                        </p>
                        <p className='flex items-center gap-2 mt-2'>
                            <FaMapLocation/>
                            Dhaka, Bangladesh
                        </p>
                    </div>
                </motion.div>
                {/* quick links */}
                <motion.div 
                initial={{opacity:0, y: 100}} 
                whileInView={{opacity:1 , y: 0}}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: .6,
                }} 
                className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Quick Links</h1>
                    <div className='grid grid-cols-2 gap-3'>
                        {/* first column */}
                        <div>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        {/* second column  */}
                        <div>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                    </div>
                </motion.div>
                {/* social links  */}
                <motion.div 
                initial={{opacity:0, y: 100}} 
                whileInView={{opacity:1 , y: 0}}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: .7,
                }} 
                className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Follow Us</h1>
                    <div className='flex items-center gap-3'>
                        <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                        <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                        <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                        <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                    </div>
                    <div>
                        <p className='text-2xl mb-2 font-semibold'>Payment Methods</p>
                        <img src={creditCards.src} alt="Payment Methods"
                        className='w-[80%]' />
                    </div>
                </motion.div>
            </div>
            {/* copyright section  */}
            <p className='text-white text-center mt-8 border-t-2 pt-8'>Copyright © 2024 Company Name. All rights reserved</p>
        </div>
    </div>
  )
}
