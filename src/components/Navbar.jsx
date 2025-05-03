import React from 'react'
import logo from "../assets/logo.png"   
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Navbar() {
  return (
    <nav className='flex items-center justify-between my-4 md:my-0'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/">
                <img src={logo} alt="logo" className='mx-2' width={60} height={35}/>
            </a>
        </div>
        <div className='m-4 md:my-8 flex items-center justify-center gap-4 text-2xl'>
             <a href="https://www.linkedin.com/in/siddharth02022002/" target='_blank' aria-label="LinkedIn">
                <FaLinkedin color='#0077B5'/>
             </a>
             <a href="https://github.com/siddharthkush12" target='_blank' aria-label="GitHub">
                <FaGithubSquare color='black'/>
             </a>
             <a href="https://www.instagram.com/siddharth_kush2002/" target='_blank' aria-label="Instagram">
                <FaInstagram color='#f77737'/>
             </a>
             <a href="https://x.com/siddharthK0202" target='_blank' aria-label="Twitter">
                <FaXTwitter color='black'/>
             </a>
        </div>
    </nav>
  )
}

export default Navbar