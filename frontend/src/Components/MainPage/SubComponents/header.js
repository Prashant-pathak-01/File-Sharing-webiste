import React from 'react'
import Logo from './../../../Images/Logo.svg'
import Authentication from './Authentication';
import { SignInButton, SignedIn, SignedOut, UserButton} from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header class="bg-colorB">
  <div class="p-10 flex h-20 w-full items-center gap-40 ">
    <img src={Logo}></img>

    <div class="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" class="hidden md:block">
        <ul class="flex items-center gap-6 text-sm">
          <li>
          <Link to='/'><a class="text-primaryColorA transition hover:text-primaryColorB" href="/">Home </a></Link>
          </li>
          <li>
          <Link to='/aboutUs'><a class="text-primaryColorA transition hover:text-primaryColorB" href="/"> About us </a></Link>
          </li>
            <li>
            <Link to='/contactUs'><a class="text-primaryColorA transition hover:text-primaryColorB" href="/"> Contact us </a></Link>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-4">
      <SignedOut>
        <div className=' bg-primaryColorA pl-4 pt-2 hover:scale-95 transition  pb-2 pr-4  rounded-md text-white flex justify-center items-center '>
          <Authentication></Authentication>
        </div>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
        </SignedIn>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header