
import React from 'react'
import { Logo } from './assets/logo';
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { BiCopy } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi2";
import Toggle from './assets/toggle';
import Button from './assets/button';
import { Link } from 'react-router-dom';

export default function Popup() {
  return (
    
    <div className="pop px-[24px] w-[300px] h-[439px] flex flex-col justify-center items-center gap-8 bg-white rounded-[24px]">
        <div className="flex flex-col       justify-center w-[100%] gap-4">
            <span className='flex flex-row items-center justify-between '>
              <Logo
              variant='dark'/>
              <span className='text-[20px] flex flex-row items-center gap-3'>
                <IoSettingsOutline/>
                <span className='text-[#B6B3C6]'>
                  <AiOutlineCloseCircle/>
                </span>
              </span>
            </span>
            <h2 className='font2 text-[14px] text-[#413C6D] text-left font-normal'>
              This extension helps you record and help share videos with ease.
            </h2>
        </div>
        <div className='w-[100%] flex flex-col gap-6'>
          <div className='w-[100%] flex flex-row items-center justify-between px-8'>
            <span className='text-[32px] text-[#928fab] flex flex-col items-center gap-2'>
              <FiMonitor/>
              <p className='font2 text-[14px]'>Full Screen</p>
            </span>
            <span className='text-[32px] text-[#120B48] flex flex-col items-center gap-2'>
              <BiCopy/>
              <p className='font2 text-[14px] font-semibold'>Current Tab</p>
            </span>
          </div>
          <div className='font2 w-[252px] h-[48px] flex flex-row items-center justify-between pl-4 text-[#100A42] text-[24px] border-solid border-[1px] border-[#100A42] rounded-[12px] p-3'>
            <div className='flex flex-row gap-2'>
              <BsCameraVideo/>
              <h2 className='font-medium text-[14px]'>Camera</h2>
            </div>
            <span>
              <Toggle/>
            </span>
          </div>
          <div className='font2 w-[252px] h-[48px] flex flex-row items-center justify-between pl-4 text-[#100A42] text-[24px] border-solid border-[1px] border-[#100A42] rounded-[12px] p-3'>
            <div className='flex flex-row gap-2'>
              <HiOutlineMicrophone/>
              <h2 className='font-medium text-[14px]'>Audio</h2>
            </div>
            <span>
              <Toggle/>
            </span>
          </div>
          <div>
            <Link to='/signup'>
              <Button
              variant='secondary-long'
              text='Start recording'
              />
            </Link>
            
          </div>
         
        </div>
    </div>
  )
}



