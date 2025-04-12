import React, { useRef, useState } from 'react'
import { CONTACT } from '../constants'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import Button from './Button'
import logo from '../assets/logo.png'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'

const initialFormData = {
  name: '',
  email: '',
  message: ''
}

function Contact() {
  const [formData, setFormData] = useState(initialFormData)
  const formRef = useRef()

  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm(
      'service_wypu0yu',
      'template_urlu9vr',
      formRef.current,  
      'mvajjc_NkdpdWLPZf'
    )
      .then(() => {
        toast('Message sent successfully')
        setFormData(initialFormData)
        formRef.current.reset() 
      })
      .catch((error) => {
        console.error(error)
        toast('Something went wrong')
      })
  }

  return (
    <div className="flex flex-col">
      <div className="border-t border-stone-100 md:pb-10 pb-40 flex flex-col items-center md:flex-row md:justify-between">
        <div className="md:px-20 px-5 py-10">
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
            className="flex flex-col min-w-[80vw] md:min-w-xl"
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

            <Button text={'Send Message'} />
            <span className="text-muted-foreground mt-1 text-sm">
              *Your message will be delivered to my inbox.
            </span>
          </form>
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <a href="/">
          <img src={logo} className="h-5 items-center" />
        </a>
        <p className="text-sm text-stone-400">
          © Siddharth Kushwaha :) All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Contact