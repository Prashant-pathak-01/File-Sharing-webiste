import React from 'react'
import Header from './SubComponents/header';
import Footer from './SubComponents/footer';
import Body from './SubComponents/body';
import { useAuth } from '@clerk/clerk-react';

function Home() {
  const { userId, isLoaded } = useAuth();
  return (<>
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </>
  )
}

export default Home