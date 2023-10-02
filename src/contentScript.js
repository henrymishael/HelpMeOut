// import { useReactMediaRecorder } from "react-media-recorder";
/*eslint-disable no-undef */

console.log("I have been injected!!!")





var recorder = null;
var recordedChunks = [];

function onAccessApproved(stream) {
    recorder = new MediaRecorder(stream);
    recorder.start(250);

    recorder.ondataavailable = function(event) {
        recordedChunks.push(event.data);
    };

    recorder.onstop = function() {
        stream.getTracks().forEach(function(track) {
            if (track.readyState === "live") {
                track.stop();
            }
        });

        var blob = new Blob(recordedChunks, { type: 'video/webm' }, {id: Blob.index});
        var url = URL.createObjectURL(blob);

        var a = document.createElement("a");

        a.style.display = "none";
        a.href = url;
        a.download = "screen-recording.webm";

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);

        URL.revokeObjectURL(url);
        console.log(blob)
        // Send the blob to the backend
        const formData = new FormData();
        formData.append('file', blob , 'screen-recording.webm');

        fetch('https://hngx-be-5.onrender.com/api/v1/storage/upload', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
}


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "open_dialog_box") {
        console.log("requesting recording")
        sendResponse(`processed: ${message.action}`);

        navigator.mediaDevices.getDisplayMedia({
            screen: true,
            audio: true,
            video:  {
                width: { ideal: 1920 },
                height: { ideal: 1080 },
                frameRate: { ideal: 30 },
                cursor: "always" // or "motion" or "never"
            },
        }).then((stream) => {
            console.log("Access approved, calling onAccessApproved");
            onAccessApproved(stream);
        });
    }

    if (message.action === "stopVideo") {
        console.log("stopping video");
        sendResponse(`processed: ${message.action}`);
        
        if (recorder) {
            recorder.stop();
        }
    }
    
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'toggleAudio') {
      // Implement logic to toggle audio
      // Example: Toggle the audio tracks
      const audioTracks = document.querySelectorAll('audio');
      audioTracks.forEach(track => {
        if (track.enabled) {
          track.enabled = false;
        } else {
          track.enabled = true;
        }
      });
    }
  
    let cameraStream;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'toggleVideo') {
    if (cameraStream) {
      stopCamera();
    } else {
      startCamera();
    }
  }
});

function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      cameraStream = stream;
      const videoElement = document.createElement('video');
      videoElement.srcObject = stream;
      document.body.appendChild(videoElement);
    })
    .catch(error => {
      console.error('Error accessing camera:', error);
    });
}

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(track => track.stop());
    cameraStream = null;
    // Remove the video element from the DOM or hide it
  }
}

  });
  




// {
// 	const { record, recordScreen, getMainMediaElement } = window.webVcr;

// 	chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
// 		switch(request.command){
// 			case "toggle-record": {
// 				return await toggleRecordMainMedia(request, sendResponse);
// 			}
            
// 			case "toggle-screen-record": {
// 				return await toggleRecordScreen(request, sendResponse);
// 			}
//             default:
//                 return null
            
// 		}
// 	});

// 	let mainVideoRecorder;
// 	let mainMediaElement;
// 	async function toggleRecordMainMedia(request, sendResponse){
// 		if (mainVideoRecorder) {
// 			mainVideoRecorder();
// 			mainVideoRecorder = null;
// 			mainMediaElement.style.border = "none";
// 			sendResponse({ status: "record-stopped" });
// 		} else {
// 			mainMediaElement = getMainMediaElement(request.payload.mediaTypes);
// 			if(!mainMediaElement){
// 				sendResponse({ status: "no-element-found" });
// 			} else {
// 				try {
// 					mainVideoRecorder = await record(mainMediaElement);
// 					mainMediaElement.style.border = "3px dashed magenta";
// 					sendResponse({ status: "record-started" });
// 				} catch(ex){
// 					sendResponse({ status: "record-fail", payload: { ex } });
// 				}
// 			}

// 		}
// 		return true;
// 	}


// 	let screenRecorder;
// 	async function toggleRecordScreen(){
// 		if (screenRecorder) {
// 			screenRecorder();
// 			screenRecorder = null;
// 			sendResponse({ status: "record-stopped" });
// 		} else {
// 			screenRecorder = await recordScreen(mainMediaElement);
// 			sendResponse({ status: "record-started" });
// 		}
// 		return true;
// 	}


    
