import React from 'react'
import { motion } from 'framer-motion'

const techIcons = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'react' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'node' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'mongo' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'html' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'css' },
  { src: 'https://res.cloudinary.com/di4eksvat/image/upload/v1744390378/icons8-express-js-100_sxsfek.png', alt: 'express' },
  { src: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg', alt: 'tailwind' },
  { src: 'https://img.icons8.com/3d-fluency/100/github.png', alt: 'github' },
  { src: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/c/c-plain.svg', alt: 'c' },
  { src: 'https://res.cloudinary.com/di4eksvat/image/upload/v1744383088/c_m2lljt.svg', alt: 'c++' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'python' },
]

const waveVariants = (index) => ({
  initial: { y: -50 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      delay: index * 0.2,
    },
  },
})

function Tech() {
  return (
    <div className='pb-30 mt-20 md:mt-40'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='mb-30 text-center text-4xl text-stone-100'
      >
        Technologies
      </motion.h2>

      <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 md:gap-30 gap-y-10'>
        {techIcons.map((icon, index) => (
          <motion.div
            key={icon.alt}
            variants={waveVariants(index)}
            initial="initial"
            animate="animate"
            className='flex justify-center items-center'
          >
            <img src={icon.src} alt={icon.alt} width={80} height={80} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Tech