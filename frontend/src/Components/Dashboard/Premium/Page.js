import React from 'react'
import CreditCardOffOutlinedIcon from '@mui/icons-material/CreditCardOffOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
function page() {
  const payment=()=>{
    alert("🚧 Payment system is Under Construction 🚧");
  }
  return (
    <div className='w-full h-screen flex flex-col  items-center bg-colorB'>
      <p className='text-5xl font-oswald p-16 font-bold text-blue-900'>Our Pricing</p>
      <div className='flex flex-row justify-between h-1/2 w-full pl-36 pr-36'>
        <div className='w-2/5 h-full bg-white rounded-2xl border-4 border-primaryColorA flex flex-col items-center'>
          <div className='bg-white w-1/2 rounded-lg h-12 border-4 border-primaryColorA flex flex-row justify-center items-center font-oswald text-lg text-primaryColorA' style={{marginTop:'-25px'}}>
            <CreditCardOffOutlinedIcon className='mr-2 text-primaryColorA'></CreditCardOffOutlinedIcon>Free
          </div>
          <div className=' w-full p-6'>
            <p className='m-2 flex flex-row items-top'><TaskAltOutlinedIcon className='text-green-600 m-2'></TaskAltOutlinedIcon><span  className='mt-1 font-medium '> Maximum file size limit 2.00 Mb</span></p>
            <p className='m-2 flex flex-row items-top'><TaskAltOutlinedIcon className='text-green-600 m-2'></TaskAltOutlinedIcon><span  className='mt-1 font-medium '> Maximum 5 file share </span></p>
            <p className='m-2 flex flex-row items-top'><CancelOutlinedIcon className=' text-red-500 m-2'></CancelOutlinedIcon><span className='mt-1 font-medium '> Premium access </span></p>
          </div>
        <button className='bg-primaryColorB text-white w-1/2 h-12 rounded-md hover:bg-white hover:border-2 hover:border-primaryColorA hover:text-primaryColorA font-medium font-oswald transtiron duration-200' disabled>Basic Plan</button>
        </div>
        <div className='w-2/5 h-full bg-blue-200 rounded-2xl border-4 border-primaryColorA flex flex-col items-center'>
        <div className='bg-white w-1/2 rounded-lg h-12 border-4 border-primaryColorA flex flex-row justify-center items-center font-oswald text-lg text-primaryColorA' style={{marginTop:'-25px'}}>
          <DiamondOutlinedIcon className='mr-2 text-yellow-500'></DiamondOutlinedIcon>Premium
        </div>
        <div className=' w-full p-6'>
          <p className='m-2 flex flex-row items-top'><TaskAltOutlinedIcon className='text-green-600 m-2'></TaskAltOutlinedIcon><span  className='mt-1 font-medium '> Maximum file size limit 10.00 Mb</span></p>
          <p className='m-2 flex flex-row items-top'><TaskAltOutlinedIcon className='text-green-600 m-2'></TaskAltOutlinedIcon><span  className='mt-1 font-medium '> Unlimited file share </span></p>
          <p className='m-2 flex flex-row items-top'><TaskAltOutlinedIcon className='text-green-600 m-2'></TaskAltOutlinedIcon><span  className='mt-1 font-medium '> Lifetime premium access </span></p>

        </div>
        <button className='bg-primaryColorA text-white w-1/2 h-12 rounded-md hover:bg-white hover:border-2 hover:border-primaryColorA hover:scale-90 hover:text-primaryColorA font-medium font-oswald transtiron duration-200' onClick={payment}>Buy Premium</button>
        </div>
      </div>
    </div>
  )
}

export default page;