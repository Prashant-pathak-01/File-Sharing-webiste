import { SignInButton, SignedIn, SignedOut, useUser } from '@clerk/clerk-react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useEffect } from 'react';
import Authentication from './Authentication';
import {addUser} from '../../../API/api';
import { Link } from 'react-router-dom';
function Body() {
  const {user} = useUser();
  useEffect(()=>{
    const addUserData=async()=>{
      let data = {
        UserName:user?.primaryEmailAddress?.emailAddress,
        Plan:false,
        FileCount:0,
        FileSize:0
      };
      let res = await addUser(data);
    }
    user && addUserData();
  },[user]);
  return (
    <section>
  <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-primaryColorA bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        Seamless Sharing, Effortless Connections !
      </h1>
      <h2
        class="bg-primaryColorB bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl p-6">
        Your Files, Anytime, Anywhere 
      </h2>

      <p class="mx-auto mt-4 max-w-4xl sm:text-xl/relaxed">
      Revolutionize your file-sharing experience with our user-friendly application. Share documents, images, and more effortlessly. Experience seamless collaboration anytime, anywhere, making teamwork a breeze!
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <SignedOut>
          <div className='w-48 flex justify-center items-center rounded bg-primaryColorA px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:border-2 hover:border-primaryColorA hover:text-primaryColorA cursor-pointer'>
            <Authentication/>
          </div>
        </SignedOut>
        <SignedIn>
          <Link to='/dashboard/sharefile'><a 
            class="block w-full rounded border border-primaryColorA bg-primaryColorA px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primaryColorA focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
            Start Sharing <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </a></Link>
        </SignedIn>

        <Link to='/aboutUs'><a
          class="block w-full rounded border border-primaryColorA px-12 py-3 text-sm font-medium text-primaryColorA hover:bg-primaryColorA hover:text-white focus:outline-none focus:ring active:bg-primaryColorA sm:w-auto">
          Learn More
        </a></Link>
      </div>
    </div>
  </div>
</section>
  );
}

export default Body;
