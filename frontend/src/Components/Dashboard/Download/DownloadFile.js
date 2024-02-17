import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ErrorSVG from './../../../Images/robot-rafiki.svg'
import Logo from './../../../Images/Logo.svg'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {getDownloadFileData} from './../../../API/api'
import FileSvg from './../../../Images/file.png'
function DownloadFile() {
    const location = useLocation();
    const pathParts = location.pathname.split('/');
    const id = pathParts[pathParts.length - 1];
    const remainingUrl = pathParts.slice(0, -1);
    const result = remainingUrl.join('');
    const [data,setData] = useState();
    const [password,setPassword] = useState("");
    useEffect(()=>{
        const getFileData = async()=>{
            let res = await getDownloadFileData({Id:id});
            setData(res);
        }
        getFileData();
    },[]);

    const DownloadFile=async()=>{
        if(password===data?.Password){
            window.location.href = data.Url;
        }else{
            alert("Wrong password");
        }
    }

    return (
        <div className='w-full h-screen bg-colorB'>
            {
            result==='download-file' && data?.Name ?
            <div className='w-full flex flex-col items-center'>
                <div><img src={Logo} className='w-48 h-28 '></img></div>
                <div className='flex flex-col justify-center items-center bg-colorA w-1/3 p-14 rounded-3xl'>
                    <p className='text-4xl font-sans font-bold text-blue-900 p-2 text-center'>Download this file</p>
                    <p className='text-sm text-primaryColorA font-semibold m-2'>Shared by - {data.UserName}</p>
                    <img src={FileSvg} className='w-28 h-28 m-6'></img>
                    <p className='text-primaryColorA text-sm'>{data.Name} </p>
                    <p className='mb-6 text-primaryColorA text-sm'>{(data.Size/11024/1024).toFixed(3)} Mb</p>
                    <input placeholder='Enter the Password' className='w-full h-10 rounded-lg border-2 border-dashed border-primaryColorA p-4 text-blue-900 font-bold font-mono focus:outline-none' onChange={(e)=>setPassword(e.target.value)}></input>
                    <button className='bg-blue-500 m-8 p-2 w-2/3 rounded-md text-white shadow-lg shadow-sky-950 border-2 border-blue-300 hover:scale-95 transition-all'  onClick={DownloadFile}>Download <FileDownloadIcon></FileDownloadIcon></button>
                    <p className='text-blue-500'>Default password - 123456</p>
                </div>
            </div>:
            <div className='w-full h-screen justify-center items-center flex bg-colorB'><img src={ErrorSVG}  className='w-4/5 h-4/5'></img></div>
            }
        </div>
    );
}

export default DownloadFile;
