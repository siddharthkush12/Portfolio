import React, { useRef, useState } from 'react'
import { CONTACT } from '../constants'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import Button from './Button'
import logo from '../assets/logo.png'
import emailjs from '@emailjs/browser'
import { toast, Toaster } from 'sonner'
import { Spinner } from 'flowbite-react'




const initialFormData = {
  name: '',
  email: '',
  message: ''
}

function Contact() {
  const [formData, setFormData] = useState(initialFormData)
  const [isLoading,setIsLoading] =useState(false)
  
  const formRef = useRef()

  function sendEmail(e) {
    e.preventDefault() 
 
    setIsLoading(true)
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
        toast('Message sent successfully')
        setFormData(initialFormData)
        formRef.current.reset() 
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        toast('Something went wrong')
        setIsLoading(false)
      })
      
  }

  return (
    <div className="relative flex flex-col">
      <div className="border-t border-stone-500 md:pb-10 pb-9 flex flex-col items-center md:flex-row md:justify-between">
        <div className="lg:px-20 px-5 py-10 text-stone-700">
          <h2 className="text-4xl">Let's Connect</h2>
          <p className="mt-6">{CONTACT.address}</p>
          <p className="">{CONTACT.phoneNo}</p>
          <a href="#name" className="border-b">
            {CONTACT.email}
          </a>
        </div>

        <div className="px-5 md:pt-10">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col min-w-[80vw] md:min-w-[30vw] lg:min-w-xl"
          >
            <div className="flex flex-col mb-4">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="user_name"
                placeholder="Enter Your Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="user_email"
                placeholder="Enter your Email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Enter Message"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </div>

            <Button text={'Send Message'} className={'rounded-full'}/>
            <span className="text-stone-500 mt-1 text-sm">
              *Your message will be delivered to my inbox.
            </span>
          </form>
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <a href="/">
          <img src={logo} className="h-5 items-center" />
        </a>
        <p className="text-[12px] md:text-sm text-stone-500">
          © Siddharth Kushwaha :) All rights reserved.
        </p>
      </div>
      {
        isLoading &&
        <div className='absolute flex items-center justify-center top-1/2 left-1/2'> 
          <Spinner className='h-15 w-15 text-muted-foreground'/>
        </div>
      }
    </div>
  )
}

export default Contact