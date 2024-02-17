import React, { useState } from 'react'
import Header from './SubComponents/header';
import Footer from './SubComponents/footer';
import ContactSVG from '../../Images/Contact-us.svg'
function Contact() {
           
  return (
    <div>
        <Header></Header>
        <h1 className='text-5xl text-primaryColorA font-bold text-center p-5'>Contact Us</h1>
        <p className='ml-10 mr-10 mt-10 text-lg'>Have a question, feedback, or need assistance? Use the form below to get in touch with us. Whether you're experiencing technical difficulties, have inquiries about our services, or simply want to share your thoughts, we're here to help! Fill out the form, and we'll respond to your message as soon as possible. Your satisfaction is our priority !</p>
        <div className='flex flex-row justify-between items-center m-20'>
        <div className='w-2/5 bg-blue-100 p-10 rounded-2xl '>
        <h2 className="text-3xl font-semibold mb-4 text-primaryColorA">Contact Us</h2>
      <form action='https://formsubmit.co/prashantpathak6395@gmail.com' method='POST' >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
      </form>
        </div>
        <img src={ContactSVG} className='w-2/5 h-2/5'></img>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Contact