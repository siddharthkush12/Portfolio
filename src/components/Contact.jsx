import React from 'react'
import { CONTACT } from '../constants'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import Button from './Button'
import logo from '../assets/logo.png'

function Contact() {
  return (
    <div className='flex flex-col'>
      <div className='border-t  border-stone-100 md:pb-10 pb-40 flex flex-col items-center md:flex-row md:justify-between'>
        <div className='md:px-20 px-5 py-10'>
          <h2 className='text-4xl'>Let's Connect</h2>
          <p className='mt-6'>{CONTACT.address}</p>
          <p className=''>{CONTACT.phoneNo}</p>
          <a href='#name' className='border-b'>{CONTACT.email}</a>
        </div>

        <div className='px-5 py-10'>
                <form action="submit" className='flex flex-col min-w-[80vw] md:min-w-xl'>
                  <div className='flex flex-col mb-4'>
                    <Label htmlFor="name">Name</Label> 
                    <Input type="text" id="name" placeholder="Enter Your Name"/>
                  </div>
                  <div className='flex flex-col mb-4'>
                    <Label htmlFor="name" >Email</Label> 
                    <Input type="text" id="name" placeholder="Enter your Email"/>
                  </div>
                  <div className='flex flex-col mb-4'>
                    <Label htmlFor="name">Message</Label> 
                    <Textarea type="text" id="name" placeholder="Enter Message"/>
                  </div>

                  <Button text={'Send Message'}/>
                  <span className='text-muted-foreground'>*</span>
                </form>
        </div>
      </div>
      <div className='flex justify-between mb-5'>
          <a href="/"><img src={logo} className='h-5 items-center' /></a>
          <p className='text-sm text-stone-400'>© Siddharth Kushwaha:) All rights reserved.</p>
      </div>

    </div>
  )
}

export default Contact