import React from 'react'
import Logo from './../../../Images/Logo.svg';
import { Link } from 'react-router-dom';
function footer() {
  return (
    <div className='flex flex-row justify-between w-full p-16 h-60 bg-colorB items-center'>
        <div className='flex flex-col w-1/2 items-center'>
            <img src={Logo}></img>
            <p className='text-center p-4 text-primaryColorA'>Empower your file sharing journey! Our platform ensures a seamless and secure experience. Effortlessly collaborate on documents, photos, and videos. Elevate your workflow with user-friendly efficiency. Join us for a new era of hassle-free collaboration!</p>
        </div>
        <div className='flex flex-col w-1/2 items-center mt-10'>
        <nav aria-label="Global" class="hidden md:block">
                <ul class="flex items-center gap-20 text-sm">
                    <li>
                      <Link to='/'><a class="text-primaryColorA transition hover:text-primaryColorB text-lg font-sans" href="/">Home </a></Link>
                    </li>
                    <li>
                      <Link to='/aboutUs'><a class="text-primaryColorA transition hover:text-primaryColorB text-lg font-sans" href="/"> About us </a></Link>
                    </li>
                    <li>
                      <Link to='/contactUs'><a class="text-primaryColorA transition hover:text-primaryColorB text-lg font-sans" href="/"> Contact us </a></Link>
                    </li>
                </ul>
            </nav>
            <div>
            <p class="text-primaryColorB transitio p-4">------------------------------------</p>
            </div>
            <p className='text-blue-900 ml-80 transition hover:text-red-600 cursor-pointer mt-10'>Made with ❤️ by - Prashant Pathak</p>

        </div>
    </div>
  )
}

export default footer