import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import Button from './Button'


function Projects() {
  
  
  return (
    <div className="relative my-10 md:my-30 px-4 sm:px-6 lg:px-1">
      <div className="hidden md:block absolute top-14 bg-gradient-to-b from-[#E2CBFF] via-[#393BB2] to-[#E2CBFF] left-1/2 transform -translate-x-1/2 h-full w-1 z-0" />

      <h2 className="mb-16 text-center text-4xl text-stone-100 relative z-10">
        Projects
      </h2>

      <div className="flex flex-col gap-24">
        {PROJECTS.map((project, index) => {
          const isLeft = index % 2 === 0

          return (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.5 }}
              className={`
                relative z-10 flex flex-col-reverse items-center gap-8 
                md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
              `}
            >
           

              <div className="w-full md:w-1/2 text-center md:text-left px-4">
                <h3 className="mb-2 font-semibold text-2xl text-stone-100">
                  {project.title}
                </h3>
                <p className="mb-4 text-stone-400">{project.description}</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-stone-900 px-3 py-1 text-sm font-semibold text-stone-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                   <a href={project.link} target="_blank">
                     <Button text={project.siteText} className="rounded-2xl" />
                   </a>
                   {project.live && (
                     <a href={project.git} target="_blank">
                       <Button text={"Explore on GitHub"} className="rounded-2xl" />
                     </a>
                   )}
                </div>
              </div>

              {/* Project Card */}
              <div className="w-full md:w-1/2 flex justify-center">
                <ProjectCard cardItem={project} />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects