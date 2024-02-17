import React from 'react'
import ErrorSVG from './Images/404 error with a landscape-bro.svg'
function ErrorPage() {
  return (
    <div className='w-full h-screen justify-center items-center flex bg-colorB'>
        <img src={ErrorSVG} className='w-4/5 h-4/5'></img>
    </div>
  )
}

export default ErrorPage