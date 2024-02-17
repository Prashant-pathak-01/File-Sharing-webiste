import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { getFile } from '../../../API/api';
import Snackbar from '@mui/material/Snackbar';
import {updatePassword} from './../../../API/api';
import FileSVG from '../../../Images/file.png'
import { sendMail } from '../../../API/api';
function Page({ setView, fileId,setFileId }) {
  const [file, setFile] = useState([]);
  const [url,setUrl] = useState();
  const [Password,setPassword] = useState();
  const [mail,setMail] = useState();
  useEffect(() => {
    const getFileData = async () => {
      const res = await getFile({FileId:fileId});
      setFile(res);
      setUrl(`${window.location.origin}/download-file/${res?.FileId}`);
    };
    getFileData();
  }, [setView,fileId]);

  const copyText = () => {
    navigator.clipboard.writeText(url);
    handleClick();
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBack = ()=>{
    setView(0);
    setFile(null);
    setFileId("");
  }

  const changePassword=async()=>{
    let res = await updatePassword({FileId:fileId,Password:Password});
    alert(res);
  }

  const SendMail=async()=>{
    let res = await sendMail({Sender:file?.UserName,Reciever:mail,Password:file?.Password,Link:url});
    console.log(res);
  }

  return (
    <div className='flex flex-col p-10 w-full'>
      <button>
        <div className='flex flex-row items-center'>
          <ArrowBackIcon
            style={{ fontSize: '40px' }}
            className='cursor-pointer border-2 border-colorA text-primaryColorA'
            onClick={handleBack}
          />
          <span className='text-primaryColorA font-sans text-xl p-4'>Go back</span>
        </div>
      </button>
      <div className='flex flex-row w-full justify-between p-12 h-full'>
        <div className='bg-colorB w-1/2 h-full rounded-3xl flex flex-col justify-center items-center'>
          <img src={(file?.Type=='image/jpeg' || file?.Type=='image/png' || file?.Type=='image/gif')?file?.Url:FileSVG} className='w-3/5 h-3/5 border-4 border-primaryColorB rounded-2xl'></img>
          <h4 className='pt-4 text-primaryColorA'>{file?.Name}</h4>
          <h5 className='text-primaryColorA'>{(file?.Size/10024/1024).toFixed(3)} Mb</h5>

        </div>
        <div className='w-4 h-full'></div>
        <div className='bg-colorA w-1/2 h-full flex flex-col items-center justify-center rounded-3xl'>
          <div className='w-full flex flex-col justify-center items-center'>
            <h4 className='w-4/5 ml-10 text-primaryColorA'>File Url</h4>
            <div className='w-4/5 h-14 rounded-xl bg-colorB border-2 border-dashed border-primaryColorA pl-4 items-center justify-center flex'>
              <input className='w-full bg-transparent focus:outline-none' value={url}></input>
              <ContentCopyIcon className='ml-4 mr-4 text-primaryColorA cursor-pointer hover:scale-110' onClick={copyText}></ContentCopyIcon>
            </div>
          </div>
          <div className='pt-6 w-full flex flex-col justify-center items-center'>
            <h4 className='w-4/5 ml-10 text-primaryColorA'>Change Password</h4>
            <div className='h-full flex flex-col w-4/5 bg-colorB rounded-xl p-6 justify-center items-center'>
              <span className='flex flex-row justify-center items-center'><input className=' bg-primaryColorB text-primaryColorA rounded-md h-12 w-60 m-2 p-2 focus:outline-none border-2 border-primaryColorA placeholder-primaryColorA' placeholder='Enter new Password' onChange={(e)=>setPassword(e.target.value)}></input>
              <button className='h-12 w-24 rounded-lg bg-primaryColorA text-white hover:scale-95' onClick={changePassword}>Update</button></span>
            </div>
          </div>
          <div className='pt-6 w-full flex flex-col justify-center items-center'>
            <h4 className='w-4/5 ml-10 text-primaryColorA'>Share File</h4>
            <div className='h-full flex flex-col w-4/5 bg-colorB rounded-xl p-6 justify-center items-center'>
              <input className='h-10 w-full bg-primaryColorB text-primaryColorA rounded-md p-6 focus:outline-none border-2 border-primaryColorA placeholder-primaryColorA' placeholder='Enter the email address' onChange={(e)=>setMail(e.target.value)}></input>
              <button className='h-10 w-2/5 mt-2 rounded-lg bg-primaryColorA text-white hover:scale-95' onClick={SendMail}>Send File</button>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
        onClose={handleClose}
        message="Link copied to clipboard."
      />
    </div>
  );
}

export default Page;
