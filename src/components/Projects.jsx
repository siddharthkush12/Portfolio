import React from 'react'
import { PROJECTS } from '../constants'
import CardAnimatedBorderGradient from './CardAnimatedBorderGradient'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <div className='pb-30 my-10'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 mb-30 text-center text-4xl text-stone-100'
      >
        Projects
      </motion.h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col'
          >
     
            <CardAnimatedBorderGradient cardItem={project} />

           
            <div className='w-full max-w-md mt-4'>
              <h3 className='mb-2 font-semibold text-2xl text-stone-100'>{project.title}</h3>
              <p className='mb-4 text-stone-400'>{project.description}</p>

              <div className='flex flex-wrap gap-4'>
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className='rounded-full bg-stone-900 px-3 py-1 text-sm font-semibold text-stone-400'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects