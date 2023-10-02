import React from 'react'
import Logo from './assets/logo';
import { FaUserCircle } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { RiSearch2Line } from "react-icons/ri";

export default function HomePage() {
  return (
    <div className=' w-[100vw] h-[100vh] bg-white pt-10'>
        <header className='px-[100px] pb-[43px] border-b-[1px] border-solid border-gray-300'>
            <div className='flex flex-row w-[100%] h-[40px] justify-between items-center'>
                <Logo
                variant='dark'
                />
                <span className='flex flex-row items-center justify-center gap-2'>
                    <span className='text-[40px] text-[#515151]'>
                        <FaUserCircle/>
                    </span>
                    <h2 className='text-[16px] font2'>John Mark</h2>
                    <span className='text-[24px]'>
                        <GoChevronDown/>
                    </span>
                </span>
            </div>
            <div className='pt-10  flex flex-row justify-between items-center'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[32px] font-bold font1'>Hello, John Mark</h2>
                    <h5 className='text-[18px] opacity-75'>Here are your recorded videos</h5>
                </div>
                <div className='w-[400px] h-[68px] bg-[#B6B3C6] bg-opacity-[14%] flex flex-row items-center  rounded-[12px] text-[#B6B3C6]  px-6 gap-4 text-[20px] '>
                    <span className=''>
                        <RiSearch2Line/>
                    </span>
                    <input className=' text-black text-[16px] font2 placeholder:text-[#c3c3c3] placeholder:text-[14px] border-none outline-none bg-transparent w-[100%]' type="search" placeholder='search for a particular video' />
                </div>
            </div>
        </header>
        <main></main>
    </div>
  )
}
