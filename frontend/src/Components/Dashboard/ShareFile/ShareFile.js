import React, { useState } from 'react'
import Header from './../SubComponents/header'
import Page from './Page'
import SideBar from './../SubComponents/sidenav'
import PreviewFile from '../PreviewFile/PreviewFile'
function ShareFile() {
  const[progress,setProgress] = useState(0);
  const[fileId,setFileId] = useState("");
  return (
    <div>
      <Header/>
      <div className='flex flex-row'>
        <SideBar view={progress}></SideBar>
      {progress==0?<Page setView={setProgress} setFileId={setFileId}/>:<PreviewFile  setView={setProgress} fileId={fileId} setFileId={setFileId}/>}
      </div>

    </div>
  )
}

export default ShareFile