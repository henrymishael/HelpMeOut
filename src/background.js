/*eslint-disable no-undef */





chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if(changeInfo.status === "complete" && /^http/.test((tab.url))){
        chrome.scripting.executeScript({
            target: {tabId},
            files: ['./contentScript.js'],
        }).then(()=>{
            console.log("we have injected the content script")
        }).catch(err => console.log(err, "error in background script line 9" ))
    }


// chrome.scripting.executeScript({
//     target: {tabId},
//   });
  
 // function injectRecordingUI() {
    // const recordingUI = document.createElement('div');
    // recordingUI.id = 'react-target2';
    // document.body.appendChild(recordingUI);

    //render(<RecordingUI/>, document.getElementById('react-target2'));

  


//   chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.action === "stopVideo") {
//       // Add code to stop recording
//       // Then remove the recording UI from the active tab
//       chrome.scripting.executeScript({
//         target: {tabId},
//         func: removeRecordingUI,
//       });
//     }
//   });
})

  
// //   function removeRecordingUI() {
// //     const recordingUI = document.querySelector('span#pause_record');
// //     if (recordingUI) {
// //       recordingUI.remove();
// //     }
// //   }
// 

// async function record(video) {
// 	let mediaRecorder;
// 	let recordedChunks;
// 	let stream;

// 	stream = video.captureStream();

// 	mediaRecorder = new MediaRecorder(stream, {
// 		mimeType: 'video/webm;codecs=vp9',
// 		ignoreMutedMedia: true
// 	});
// 	recordedChunks = [];
// 	mediaRecorder.ondataavailable = e => {
// 		if (e.data.size > 0) {
// 			recordedChunks.push(e.data);
// 		}
// 	};
// 	mediaRecorder.start();

// 	return () => {
// 		mediaRecorder.stop();
// 		setTimeout(() => {
// 			const blob = new Blob(recordedChunks, {
// 				type: "video/webm"
// 			});
// 			const url = URL.createObjectURL(blob);
// 			const a = document.createElement("a");
// 			a.href = url;
// 			a.download = "recording.webm";
// 			a.click();
// 			URL.revokeObjectURL(url);
// 		}, 0);
// 	}
// }

// async function recordScreen(){
// 	const stream = await navigator.mediaDevices.getDisplayMedia({
// 		video: {
// 			cursor: "never"
// 		},
// 		audio: true
// 	});
// 	mediaRecorder = new MediaRecorder(stream, {
// 		mimeType: 'video/webm;codecs=vp9',
// 		ignoreMutedMedia: true
// 	});
// 	recordedChunks = [];
// 	mediaRecorder.ondataavailable = e => {
// 		if (e.data.size > 0) {
// 			recordedChunks.push(e.data);
// 		}
// 	};
// 	mediaRecorder.start();

// 	return () => {
// 		mediaRecorder.stop();
// 		setTimeout(() => {
// 			const blob = new Blob(recordedChunks, {
// 				type: "video/webm"
// 			});
// 			const url = URL.createObjectURL(blob);
// 			const a = document.createElement("a");
// 			a.href = url;
// 			a.download = "recording.webm";
// 			a.click();
// 			URL.revokeObjectURL(url);
// 		}, 0);
// 	};
// }

// function isCustomElement(element){
// 	return element.tagName.includes("-");
// }

// function getMainMediaElement(mediaTypes) {
// 	const media = Array.from(document.querySelectorAll(mediaTypes));

// 	const shadowMedia = Array.from(document.querySelectorAll("*"))
// 		.filter(e => isCustomElement(e))
// 		.flatMap(e => e.shadowRoot ? Array.from(e.shadowRoot.querySelectorAll(mediaTypes)) : []);

// 	const allMedia = [...media, ...shadowMedia];

// 	if (allMedia.length === 0) return;

// 	let maxMedia;
// 	let maxIntersect = 0;
// 	const windowRect = { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
// 	for (const media of allMedia) {
// 		const videoRect = media.getBoundingClientRect();
// 		const intersectArea = getIntersectionArea(videoRect, windowRect);
// 		if (!maxMedia || intersectArea > maxIntersect) {
// 			maxMedia = media;
// 			maxIntersect = intersectArea;
// 		}
// 	}

// 	return maxMedia;
// }

// function getIntersectionArea(rectA, rectB) {
// 	const overlapX = Math.max(0, Math.min(rectA.left + rectA.width, rectB.left + rectB.width) - Math.max(rectA.left, rectB.left));
// 	const overlapY = Math.max(0, Math.min(rectA.top + rectA.height, rectB.top + rectB.height) - Math.max(rectA.top, rectB.top));
// 	return overlapX * overlapY;
// }

// window.webVcr = {
// 	record,
// 	recordScreen,
// 	getIntersectionArea,
// 	getMainMediaElement
// };
// })