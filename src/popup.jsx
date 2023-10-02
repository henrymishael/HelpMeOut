import React, { useState } from "react";
import { render } from "react-dom"
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { BiCopy } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import logo2 from './pages/images/light.png'
import logo from './pages/images/default.png'

import './index.css'

/*eslint-disable no-undef */
function Pop() {

   


     
    document.addEventListener("DOMContentLoaded", () => {
        //Get the selectors of the button
        const startVideo = document.querySelector('button#start_record')
        const stopVideo = document.querySelector('span#stop_record')

        startVideo.addEventListener("click", ()=>{
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
               chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                }else{
                    console.log(chrome.runtime.lastError, "error line 29b")
                }
               }) 
            })
        })
        stopVideo.addEventListener("click", ()=>{
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
               chrome.tabs.sendMessage(tabs[0].id, {action: "stopVideo"}, function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                }else{
                    console.log(chrome.runtime.lastError, "error line 29b")
                }
               }) 
            })
        })
})







 

    

    // function test(){
        
    //     chrome.tabs.query({active: true, currentWindow:true}, (tabs)=> {
    //       const activeTabId = tabs[0].id
    //       chrome.scripting.executeScript(
    //         {
    //           target: {tabId: activeTabId},
    //           function: () => alert("React Chrome Extendion"),
    //         });
    //     })
    //   }

      
const Logo = ({variant}) => {

    let style;
    let image;
  
    switch(variant){
      case 'dark':
        style = ' flex flex-row items-center gap-2 text-[16px] font-bold text-[#100a42]'
        image = logo;
        break;
      case 'light':
        style = ' flex flex-row items-center gap-2 text-[16px] font-bold text-white'
        image = logo2;
        break;
      default:
        return null;
    }

    return (
   
      <div variant = {variant} className={`${style}`}>
          <img src={image} width='40' height='40' alt='logo'/>
          <h2 className=''>HelpMeOut</h2>
      </div>
    )
    
  }

  const Toggle= ({id}) => {
    const [toggle, setToggle] = useState(false)

   
    const toggleButton = () => {
        setToggle((prevState) => !prevState);
    };
  return (
    <div>
        <span className='text-[32px]' id={id} onClick={toggleButton} >
            {toggle ? <BsToggleOn /> : <BsToggleOff />}
        
        </span>
    </div>
  )
}

const Button = ({text, variant, type, onClick, onChange, style, id}) => {
    

    switch(variant) {
        case 'primary':
            style = 'flex flex-row items-center justify-center gap-3 bg-[#120b48] text-white rounded-[8px] w-[239px] h-[65px] text-[18px] font-semibold font2 '
             ;
            break;
        case 'primary-long':
            style = 'bg-[#120b48] text-white rounded-[8px] w-[475px] h-[53px] text-[18px] font-semibold font2 '
            break;
        case 'secondary-long':
            style = 'bg-[#120b48] text-white rounded-[8px] w-[252px] h-[51px] text-[18px] font-semibold font2 '
            break;
        default:
            style = null;
            break;

    }

    return(
        (variant === 'primary'?
        (
            <button  className={` ${style}`} variant={variant}>
                {text}
                <GoArrowRight/>
            </button>
        ):
        (<button type={type} id={id} onClick={onClick} onChange={onChange} className={` ${style}`}>{text}</button> ) 
       
    ))
}

// const captureBtn = document.getElementById("capture-btn");
// const screenCaptureBtn = document.getElementById("screen-capture-btn");
// const message = document.getElementById("message");
// const mediaVideo = document.getElementById("media-video");
// const mediaCanvas = document.getElementById("media-canvas");



// captureBtn.addEventListener("click", () => {
// 	message.textContent = "";

// 	const mediaTypes = [];
// 	if(mediaVideo.checked){
// 		mediaTypes.push("video");
// 	}
// 	if (mediaCanvas.checked) {
// 		mediaTypes.push("canvas");
// 	}

// 	if(mediaTypes.length === 0) {
// 		message.textContent = "Must pick at least one media type.";
// 		return;
// 	}

// 	chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
// 		chrome.tabs.sendMessage(tabs[0].id, { command: "toggle-record", payload: { mediaTypes } }, response => {
// 			switch(response.status){
// 				case "record-started": {
// 					captureBtn.textContent = "Stop Recording";
// 					break;
// 				}
// 				case "record-stopped": {
// 					captureBtn.textContent = "Start recording";
// 					break;
// 				}
// 				case "no-element-found": {
// 					message.textContent = "No matching element found.  This could be because the element might be locked in a closed shadow DOM and you might need to use screen recording instead.";
//                     break;
// 				}
// 				case "record-failed": {
// 					message.textContent = "Could not record media, it may be using encrypted media extensions and you might need to use screen recording instead"
//                     break;
// 				}
//                 default:
//                     return null
// 			}
// 		});
// 	});
// });

// screenCaptureBtn.addEventListener("click", () => {
// 	chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
// 		chrome.tabs.sendMessage(tabs[0].id, { command: "toggle-screen-record" }, response => {
// 			switch (response.status) {
// 				case "record-started": {
// 					captureBtn.textContent = "Stop recording Screen";
// 					break;
// 				}
// 				case "record-stopped": {
// 					captureBtn.textContent = "Start recording Screen";
// 					break;
// 				}
//                 default:
//                     return null
// 			}
// 		});
// 	});
// });

document.addEventListener('DOMContentLoaded', function() {
    const toggleAudioButton = document.getElementById('toggleAudio');
    const toggleVideoButton = document.getElementById('toggleCamera');
  
    toggleAudioButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleAudio' });
      });
    });
  
    toggleVideoButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleVideo' });
      });
    });
  });
  



  









   
    
  
    return (
      
      
      <div className="pop px-[24px] w-[300px] h-[439px] flex flex-col justify-center items-center gap-8 bg-white rounded-[24px]">
          <div className="flex flex-col       justify-center w-[100%] gap-4">
              <span className='flex flex-row items-center justify-between '>
                <Logo
                variant='dark'/>
                <span className='text-[20px] flex flex-row items-center gap-3'>
                  <IoSettingsOutline/>
                  <span id='stop_record' className='text-[#B6B3C6]'>
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
                <Toggle
                id="toggleCamera"

                />
              </span>
            </div>
            <div className='font2 w-[252px] h-[48px] flex flex-row items-center justify-between pl-4 text-[#100A42] text-[24px] border-solid border-[1px] border-[#100A42] rounded-[12px] p-3'>
              <div className='flex flex-row gap-2'>
                <HiOutlineMicrophone/>
                <h2 className='font-medium text-[14px]'>Audio</h2>
              </div>
              <span>
                <Toggle
                id='toggleAudio'
                />
              </span>
            </div>
            <div>
             
                <Button id="start_record" 
                variant='secondary-long'
                text='Start recording'
                
                
                />
                
              
            </div>
           
          </div>

      </div>
    )
}

render(<Pop/> , document.getElementById("react-target"))