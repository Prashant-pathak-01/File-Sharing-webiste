import React, { useEffect, useState } from 'react'
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import { getUser } from '../../../API/api';
import { useUser } from '@clerk/clerk-react';
import MoneyOffOutlinedIcon from '@mui/icons-material/MoneyOffOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import { Link } from 'react-router-dom';
function Sidenav({view}) {
  const {user} = useUser();
  const[userData,setUserData] = useState();
  useEffect(()=>{
    const getUserData=async()=>{
      let res = await getUser({UserName:user.primaryEmailAddress.emailAddress});
      setUserData(res);
    }
    user && getUserData();
  },[user,view]);
  return (
    <div class="flex h-screen flex-col  md:w-1/5 justify-between  bg-colorB border-r-2 border-primaryColorB">
  <div class="px-4 py-6">
    <ul class="mt-6 space-y-4">
      <li>
        <Link to='/dashboard/sharefile'></Link><a class="block rounded-lg bg-colorA px-4 py-3 text-sm font-medium text-primaryColorA transition duration-300 hover:bg-primaryColorA hover:text-colorB ">
          <FileUploadRoundedIcon className='mr-3'></FileUploadRoundedIcon>Share Data
        </a>
      </li>
      <li>
        <Link to='/dashboard/history'></Link><a class="block rounded-lg bg-colorA px-4 py-3 text-sm font-medium text-primaryColorA transition duration-300 hover:bg-primaryColorA hover:text-colorB">
          <HistoryRoundedIcon className='mr-3'></HistoryRoundedIcon>History
        </a>
      </li>
      <li>
        <Link to='dashboard/premium'></Link><a class="block rounded-lg bg-colorA px-4 py-3 text-sm font-medium text-primaryColorA transition duration-300 hover:bg-primaryColorA hover:text-colorB">
          <PaymentRoundedIcon className='mr-3'></PaymentRoundedIcon>Premium
        </a>
      </li>
    </ul>
  </div>
  { userData?.Plan ?
  <div>
    <div className='flex flex-col justify-center items-center bg-green-300 rounded-md p-3 m-4'>
    <p className='text-blue-900 font-bold font-mono items-center flex justify-center'><DiamondOutlinedIcon className='text-yellow-600 mr-1'></DiamondOutlinedIcon> Premium Plan</p>
    <div className='w-full h-0.5 m-1 bg-slate-600 rounded'></div>
        <div className='w-full '>
          <p className='text-sm font-medium mt-2 ml-2'>Files Limit</p>
          <div className='flex flex-row justify-center items-center'>
            <div className='w-4/5 h-2 bg-blue-400 rounded m-2'></div>
            <p><AllInclusiveOutlinedIcon className='text-blue-800 text-sm mb-0.5'></AllInclusiveOutlinedIcon></p>
          </div>
        </div>
        <div className='w-full '>
          <p className='text-sm font-medium ml-2 '>Size Limit : <span className='text-blue-900'>10.00 Mb/file</span></p>
        </div>
    </div>
  </div>
  
  :

  <div className='flex flex-col justify-center items-center bg-green-300 rounded-md p-3 m-4'>
    <p className='text-blue-900 font-bold font-mono items-center flex justify-center'><MoneyOffOutlinedIcon></MoneyOffOutlinedIcon> Basic Plan</p>
    <div className='w-full h-0.5 m-1 bg-slate-600 rounded'></div>
        <div className='w-full '>
          <p className='text-sm font-medium mt-2 ml-2'>Files Limit</p>
          <div className='flex flex-row justify-center items-center'>
            <div className='w-4/5 h-2 bg-blue-400 rounded'>
              <div className="bg-primaryColorA h-full rounded" style={{width:`${userData?.FileCount*20}%`}}></div>
            </div>
            <p className='ml-2 font-medium text-sm mb-0.5 text-blue-900'>{userData?.FileCount}/5</p>
          </div>
          <div className='w-full '>
          <p className='text-sm font-medium mt-2 ml-2 '>Size Limit : <span className='text-blue-900'>02.00 Mb/file</span></p>
        </div>
        </div>
  </div>
  
      }
</div>
  )
}

export default Sidenav