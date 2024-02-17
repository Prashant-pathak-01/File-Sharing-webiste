import React, {  useEffect, useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import File from '../../../Images/file.png';
import ClearIcon from '@mui/icons-material/Clear';
import { app } from "../../../firebaseConfig";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import {FileData, getUser, updateUser} from '../../../API/api'
import {useUser} from '@clerk/clerk-react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
function ShareFile({setView,setFileId}) {
  const{user} = useUser();
  const [file, setFile] = useState();
  const [url, setUrl] = useState("");
  const [progress,setProgress] = useState(0);
  const [userData,setUserData] = useState();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const uploadFile=async({file})=>{
    if(userData.Plan==false && (file?.size>2*1024*1024 || userData?.FileCount>=5)){
        setOpen(true);
    }else if(file?.size>10*1024*1024){
      alert("Oops! The file you've selected surpasses premium plan's 10MB limit. Please select a smaller file size. Thank you for your understanding !")
    }
    else{
        const storage = getStorage(app);
  
  const storageRef = ref(storage, 'Data/' + file?.name);
  const uploadTask = uploadBytesResumable(storageRef, file, file.type);
  
  uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);
      progress==100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setUrl(downloadURL);
        uploadFileData(file,downloadURL);
        setTimeout(()=>{
          setView(100);
        },4000);
      });
    })

    
    }
    

  }

  useEffect(()=>{
    const getUserData = async()=>{
      let res = await getUser({UserName:user?.primaryEmailAddress.emailAddress});
      setUserData(res);
      console.log(res);
    }
    getUserData();
  },[file]);

  const uploadFileData=async(file,downloadURL)=>{
    console.log(file);
    const id = new Date().getTime().toString();
    let data = {
      UserName:user.primaryEmailAddress.emailAddress,
      Name:file.name,
      Password:"123456",
      Size:file.size,
      Url:downloadURL,
      FileId:id,
      Type:file.type
    }
    await FileData(data);
    await updateUser({UserName:userData?.UserName,FileCount:userData?.FileCount+1});
    setFileId(id);
  }


  return (
    <div className='flex flex-col items-center w-full'> 
      <h1 className='p-20 text-5xl font-sarif font-bold text-primaryColorA'>Start sharing the file now !</h1> 
      <div className="flex items-center justify-center w-4/5">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-60 border-2 border-colorA border-dashed rounded-lg cursor-pointer hover:bg-colorB  bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500">Click to <span className="font-semibold text-red-500 text-lg"> upload</span> or <span className="font-semibold text-blue-500 text-lg"> drag</span> and <span className="font-semibold text-purple-500 text-lg"> drop</span></p>
            <p className="text-xs text-primaryColorA">SVG, PNG, JPG, GIF, MP4, MP3 </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={(e) => setFile(e.target.files[0])}/>
        </label>
      </div> 
      {file?<div className='bg-colorB mt-14 w-4/6 h-32 flex flex-row p-6 items-center justify-between rounded-xl border-2 border-primaryColorB'>
        <img src={File} className='w-20 h-20'></img>
        <div>
        <h1 className='text-xl font-bold ml-10 text-primaryColorA'>{file.name}</h1>
        <h2 className='ml-10 text-slate-600 text-sm'>{(file.size/1024/1024).toFixed(3)} Mb</h2>
        <h2 className='ml-10 text-red-400 text-sm'>{file.type}</h2>
        </div>
        <button onClick={(e)=>setFile('')}><ClearIcon className='text-primaryColorA transition hover:text-red-700 cursor-pointer'></ClearIcon></button>
        
      </div>:<></>}
      {progress==0?<button disabled={!file} onClick={() => uploadFile({ file })} className="group relative inline-block focus:outline-none focus:ring m-10" >
        <span className={`absolute inset-0 translate-x-1.5 translate-y-1.5 ${!file ? 'bg-slate-300' : 'bg-colorA'} transition-transform group-hover:translate-x-0 group-hover:translate-y-0`}></span>
        <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-primaryColorA group-active:text-opacity-75">
          Share File <KeyboardArrowRightIcon />
        </span>
      </button>:<></>}
      {progress>0?<div className='w-full flex flex-row items-center justify-center p-14 '>
        <div className='w-1/2 h-8 bg-slate-500 rounded-3xl justify-left flex items-center'>
           <div style={{width:`${progress}%`}}  className={`h-8 bg-red-500 rounded-3xl`} ></div>
           <span className='absolute ml-60 text-white font-mono text-xl'>{progress.toFixed(2)} % </span>
        </div>
      </div>:<></>}



      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Upgrade to Premium"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Oops! It seems the file you're sharing exceeds our free plan limits. Upgrade to our premium plan for more sharing capabilities and exclusive features. Don't miss out, upgrade today !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">Close</Button>
          <Link to='/dashboard/premium'><Button onClick={handleClose} autoFocus variant="contained">
            Buy Premium
          </Button></Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ShareFile;
