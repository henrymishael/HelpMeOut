!function(){console.log("I have been injected!!!");var e=null,o=[];chrome.runtime.onMessage.addListener((function(n,c,t){"open_dialog_box"===n.action&&(console.log("requesting recording"),t("processed: ".concat(n.action)),navigator.mediaDevices.getDisplayMedia({screen:!0,audio:!0,video:{width:{ideal:1920},height:{ideal:1080},frameRate:{ideal:30},cursor:"always"}}).then((function(n){console.log("Access approved, calling onAccessApproved"),function(n){(e=new MediaRecorder(n)).start(250),e.ondataavailable=function(e){o.push(e.data)},e.onstop=function(){n.getTracks().forEach((function(e){"live"===e.readyState&&e.stop()}));var e=new Blob(o,{type:"video/webm"},{id:Blob.index}),c=URL.createObjectURL(e),t=document.createElement("a");t.style.display="none",t.href=c,t.download="screen-recording.webm",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(c),console.log(e);var a=new FormData;a.append("file",e,"screen-recording.webm"),fetch("https://hngx-be-5.onrender.com/api/v1/storage/upload",{method:"POST",body:a}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))}}(n)}))),"stopVideo"===n.action&&(console.log("stopping video"),t("processed: ".concat(n.action)),e&&e.stop())})),chrome.runtime.onMessage.addListener((function(e,o,n){var c;"toggleAudio"===e.action&&document.querySelectorAll("audio").forEach((function(e){e.enabled?e.enabled=!1:e.enabled=!0})),chrome.runtime.onMessage.addListener((function(e,o,n){"toggleVideo"===e.action&&(c?c&&(c.getTracks().forEach((function(e){return e.stop()})),c=null):navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){c=e;var o=document.createElement("video");o.srcObject=e,document.body.appendChild(o)})).catch((function(e){console.error("Error accessing camera:",e)})))}))}))}();