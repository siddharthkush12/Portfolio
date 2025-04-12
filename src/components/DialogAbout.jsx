import React from 'react'
import { DialogContent } from './ui/dialog'
import { HERO_CONTENT } from '@/constants'
import Button from './Button'
import ButtonRotatingBackgroundGradient from './ButtonRotatingBackgroundGradient'

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

function DialogAbout() {
  return (
    <DialogContent className="bg-stone-500 rounded-2xl md:min-w-8/12">
      <div className="flex flex-col md:flex-row justify-between gap-8 p-4">
        <div className="flex flex-col gap-9 md:w-1/2">
          <span className="text-stone-50 text-lg font-semibold">About Me</span>
          <p className="text-stone-100 text-sm">{HERO_CONTENT}</p>
          <a href="/SiddharthResume.pdf" download="SiddharthResume.pdf">
          <ButtonRotatingBackgroundGradient buttontext={"Download Resume"}/>
          </a>
        </div>

        <div className="flex flex-col gap-9 md:w-1/2">
          <span className="text-stone-50 text-lg font-semibold">Technologies</span>
          <div className="flex flex-wrap gap-5">
            {techIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="h-15 w-15 animate-bounce"
                style={{ animationDuration: `${Math.random() * 2 + 1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </DialogContent>
  )
}

export default DialogAbout