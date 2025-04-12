import React from 'react'
import logo from "../assets/logo.png"   
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Navbar() {
  return (
    <nav className='flex items-center justify-between'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/">
                <img src={logo} alt="logo" className='mx-2' width={60} height={35}/>
            </a>
        </div>
        <div className='my-8 flex items-center justify-center gap-4 text-2xl'>
             <a href="https://www.linkedin.com/in/siddharth02022002/" target='_blank' aria-label="LinkedIn">
                <FaLinkedin color='white'/>
             </a>
             <a href="https://github.com/siddharthkush12" target='_blank' aria-label="GitHub">
                <FaGithubSquare color='white'/>
             </a>
             <a href="https://www.instagram.com/siddharth_kush2002/" target='_blank' aria-label="Instagram">
                <FaInstagram color='white'/>
             </a>
             <a href="https://twitter.com/siddharth_kush" target='_blank' aria-label="Twitter">
                <FaXTwitter color='white'/>
             </a>
        </div>
    </nav>
  )
}

export default Navbar