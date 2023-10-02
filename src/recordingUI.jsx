import React from 'react'
import { render } from "react-dom"
import { BsPause} from "react-icons/bs";


export default function RecordingUI() {
/*eslint-disable no-undef */
    document.addEventListener("DOMContentLoaded", () => {
        //Get the selectors of the button
        const startVideo = document.querySelector('span#pause_record')

        startVideo.addEventListener("click", ()=>{
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
               chrome.tabs.sendMessage(tabs[0].id, {action: "stopVideo"}, function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                }else{
                    console.log(chrome.runtime.lastError, "error line 18b")
                }
               }) 
            })
        })
});


    
    async function startCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            const videoElement = document.getElementById('cameraFeed');
            videoElement.srcObject = stream;
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    }

    startCamera();
console.log('recordingUi')

  return (
    <div className='flex flex-row items-center justify-between w-[847px] h-[200px] px-10 py-5'>
        <div className='w-[160px] h-[160px] rounded-[100px]'>

        </div>
        <div className='w-[567px] h-[102px] flex flex-row'>
            <div>Timer</div>
            <div>|</div>
            <div className='flex flex-row gap-6 items-center justify-center'>
                <div className='flex flex-col items-center gap-1'>
                <span id='pause_record' className='w-[44px] h-[44px] bg-white rounded-[100px]'>
                    <BsPause/>
                </span>
                <p>Pause</p>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}


render(<RecordingUI/> , document.getElementById("react-target2"))