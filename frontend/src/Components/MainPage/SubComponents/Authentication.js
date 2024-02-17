import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SignInButton } from '@clerk/clerk-react';

function Authentication() {
  return (
    <div>
        <div class="sm:flex sm:gap-4">
        <SignInButton>
          <button href="/dashboard/sharefile">
            Start Sharing  <ArrowForwardIcon></ArrowForwardIcon>
          </button>
        </SignInButton>
        </div>
    </div>
  )
}

export default Authentication