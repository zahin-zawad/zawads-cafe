import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {motion} from 'framer-motion'
import { Dispatch, SetStateAction } from 'react';

interface NavBarProps {
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}

export default function NavBar({ sidebar, setSidebar }: NavBarProps) {
  return (
    <nav className='absolute top-0 left-0 w-full pt-10 text-white z-20'>
        <div className="container">
            <div className='flex justify-between items-center'>
                {/* logo section  */}
                <motion.h1
                initial={{opacity:0, y: -100}} 
                animate={{opacity:1 , y: 0}}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: .2,
                }}
                 className='text-2xl font-semibold uppercase'><span className='text-primary'>Zawad&apos;s</span> Cafe</motion.h1>

                {/* hamburger menu */}
                <motion.div
                initial={{opacity:0, y: -100}} 
                animate={{opacity:1 , y: 0}}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: .2,
                }}
                onClick={() => setSidebar(!sidebar)}
                >
                    <GiHamburgerMenu className='text-3xl cursor-pointer'/>
                </motion.div>
            </div>
        </div>
    </nav>
  )
}
