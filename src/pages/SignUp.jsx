import React from 'react'
import { Logo } from './assets/logo'
import Social from './assets/social'
import Input from './assets/input'

export default function SignUp() {
  return (
    <div className='px-[100px] flex flex-col justify-center w-[100vw] h-[100vh] bg-white'>
        <div>
            <Logo variant='dark'/>
        </div>
        <div className='flex flex-col justify-center items-center text-center  gap-8'>
            <span className='flex flex-col items-center justify-center'>
                <h2 className='text-[32px] font-bold'>Log in or Sign up</h2>
                <p className='font2 text-[16px] opacity-75 w-[70%] '>Join millions of others in sharing successful moves on HelpMeOut.</p>
            </span>
            <div className='flex-col flex items-center gap-6'>
                <Social
                    text='Continue with Google'
                />
                <Social
                    text='Continue with Facebook'
                />
            </div>
            <div className='flex flex-row items-center justify-center '>
                <span className='w-[200px] h-[1px] border-solid border-[0.5px] border-gray-300 '></span>
                <h2 className='py-[2px] px-[10px]'>or</h2>
                <span  className='w-[200px] h-[1px] border-solid border-[0.5px] border-gray-300'></span>
            </div>
            <div>
                <Input/>
            </div>
        </div>
    </div>
  )
}
