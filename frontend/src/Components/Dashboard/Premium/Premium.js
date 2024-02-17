import React from 'react'
import Header from './../SubComponents/header'
import Page from './Page'
import SideBar from './../SubComponents/sidenav'

function Premium() {
  return (
    <div>
      <Header/>
      <div className='flex flex-row'>
        <SideBar/>
      <Page/>
      </div>
    </div>
  )
}

export default Premium