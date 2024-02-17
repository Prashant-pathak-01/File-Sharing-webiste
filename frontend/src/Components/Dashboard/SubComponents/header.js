import React from 'react';
import Logo from './../../../Images/Logo.svg';
import { UserButton } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();
  return (
    <div className='flex p-5 items-center bg-colorB border-b-2 border-primaryColorB justify-between cursor-pointer'>
      <img src={Logo} onClick={()=>navigate('/')}/>
    <div class="md:hidden">
        <ul class="mt-6 space-y-4 flex flex-col">
            <li>
                <a href="/sharefile" class="block rounded-lg  px-4 py-3 text-center text-sm font-medium text-primaryColorA transition duration-300 hover:bg-primaryColorA hover:text-colorB ">
                    Share Data
                </a>
            </li>
            <li>
                <a href="/history" class="block rounded-lg  px-4 py-3 text-center text-sm font-medium text-primaryColorA transition duration-300 hover:bg-primaryColorA hover:text-colorB">
                    History
                </a>
            </li>
            <li>
                <a href="/premium" class="block rounded-lg  px-4 py-3 text-center text-sm font-medium text-primaryColorA transition duration-300 hover:bg-primaryColorA hover:text-colorB">
                    Premium
                </a>
            </li>
        </ul>
    </div>
    <UserButton afterSignOutUrl='/' />
    
    </div>
  );
}

export default Header;
