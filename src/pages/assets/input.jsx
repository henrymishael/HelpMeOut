import React from 'react'
import Button from './button'


export default function Input() {
  return (
    <div className='text-left font2 text-[14px] font-medium  '>
        <form className='flex flex-col gap-4' action="">
            <span className='flex flex-col gap-3'>
                <label className='' htmlFor="email">Email</label>
                <input className='border-[1px] border-solid border-[#b6b3c6] rounded-[12px] w-[475px] h-[51px] flex items-center px-4 placeholder:text-[16px] focus:border-emerald-500 placeholder:text-[#626262]' id='email' type="email" placeholder='Enter your email address' />
            </span>
            <span className='flex flex-col gap-3'>
                <label className='' htmlFor="pass">Password</label> 
                <input className='border-[1px] border-solid border-[#b6b3c6]  rounded-[12px] w-[475px] h-[51px] flex items-center px-4 placeholder:text-[16px] focus:border-emerald-500  placeholder:text-[#626262]' id='pass' type="text" placeholder='Enter your Password' />
            </span>
            <span className='mt-5'>
                
                    <Button
                    variant='primary-long'
                    text='Sign up'/>
                
            </span>
        </form>
    </div>
  )
}
