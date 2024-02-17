import React from 'react';
import Header from './SubComponents/header';
import Footer from './SubComponents/footer';

function About() {
  return (
    <div>
        <Header></Header>
        <div>
            <h1 className='text-5xl text-center text-primaryColorA font-bold pt-8'>About Us</h1>
            <p className='mt-10 ml-20 mr-20 font-sans text-lg '>Welcome to my platform! This is where you can effortlessly share files and collaborate with others. Designed with simplicity in mind, my platform makes it easy for you to share documents, photos, videos, and more with just a few clicks.
</p><p className='mt-4 ml-20 mr-20 font-sans text-lg mb-52 '>Thanks for choosing this plateform !</p>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default About