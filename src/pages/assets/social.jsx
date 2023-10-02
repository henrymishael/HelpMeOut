import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Social({text}) {

let icon ;
 

switch (text) {
    case 'Continue with Google':
      icon = <FcGoogle/>;
      break;
    case 'Continue with Facebook':
      icon = <FaFacebook/>;
      break;
    default:
      icon = null;
      break;
  }


  return (
    <button  className='border-solid border-black border-[1px] flex flex-row items-center justify-center  gap-4 w-[475px] h-[48px] text-[16px] font-medium rounded-[12px]'><span className='font-normal text-[24px] text-blue-600'>{icon}</span>{text}</button>
  )
}

