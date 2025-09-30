import { SignedOut, SignIn, SignInButton } from '@clerk/clerk-react'
import React from 'react'

const Login = () => {
  return (
    <div className=' h-screen bg-gradient-to-b from-[#c4c4d1] to-[#94a0a3] '>
    <div className='relative top-35 left-1/2 h-full scale-135 '> 
        <SignIn />
     <SignedOut />   
     </div>   
    </div>
  )
}

export default Login
