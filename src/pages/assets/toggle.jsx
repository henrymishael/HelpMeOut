"use client";
import React, { useState } from 'react'
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";

export default function Toggle() {
    const [toggle, setToggle] = useState(false)

   
    const toggleButton = () => {
        setToggle((prevState) => !prevState);
    };
  return (
    <div>
        <span className='text-[32px]' onClick={toggleButton} >
            {toggle ? <BsToggleOn /> : <BsToggleOff />}
        
        </span>
    </div>
  )
}
