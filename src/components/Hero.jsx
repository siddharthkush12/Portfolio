import React from 'react'
import profilePic from '../assets/pro.webp'
import { HERO_CONTENT } from '../constants'
import { motion } from 'framer-motion'
import ButtonRotatingBackgroundGradient from './ButtonRotatingBackgroundGradient'


const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

function Hero() {
    return (
        <div className='pb-4 lg:mb-20 lg:pt-10'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
               
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:p-8'>
                        <motion.img
                            src={profilePic}
                            className='border border-stone-900 rounded-full'
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            width={650}
                            height={650}
                            alt="profile"
                        />
                    </div>
                </div>

                
                <div className='w-full lg:w-1/2'>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className='flex flex-col items-center lg:items-start mt-10'>
                        <motion.h2 variants={childVariants} className='pb-2 text-4xl tracking-tighter lg:text-8xl'>
                            Siddharth Kushwaha
                        </motion.h2>
                        <motion.span variants={childVariants} className='text-3xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent'>
                            MERN Developer
                        </motion.span>
                        <motion.p variants={childVariants} className='leading-relaxed tracking-tight text-xl py-6 max-w-xl my-2'>
                            {HERO_CONTENT}
                        </motion.p>
                        <ButtonRotatingBackgroundGradient buttontext={"Download Resume"} />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero