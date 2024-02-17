import React from 'react'
import Header from './../SubComponents/header'
import Page from './Page'
import SideBar from './../SubComponents/sidenav'

function History() {
  return (
      <div>
      <Header/>
      <div className='flex flex-row h-screen'>
        <SideBar/>
      <Page/>
      </div>
    </div>
  )
}

export default History