// Script for the video 
let videoElement = document.getElementById("videoElement");

// Script for the button 
let playButton = document.getElementById("playButton");
let stopButton = document.getElementById("stopButton");
let fullscreenButton = document.getElementById("fullscreenButton"); 
let loopButton = document.getElementById("loopButton");

// Script for the element 
let progressBar = document.getElementById("progressBar");

// Script for the video to function properly
videoElement.removeAttribute("controls");

document.getElementById("controlsWrapper").style.display = "flex";

videoElement.addEventListener('loadedmetadata', () => {
  progressBar.setAttribute('max', videoElement.duration);
});

videoElement.addEventListener("playing", () => {
  if (!progressBar.getAttribute('max')){
    progressBar.setAttribute('max', videoElement.duration);
  }
});

videoElement.addEventListener("waiting", () => {
  progressBar.classList.add("timeline-loading");
});
videoElement.addEventListener("canplay", () => {
  progressBar.classList.remove("timeline-loading");
});

videoElement.addEventListener("ended", () => {
  playButton.style.backgroundImage = "url('./icons/play.svg')";
});

// Script for the Play/Pause button 
function playPause(){
  if (videoElement.paused || videoElement.ended) {
    videoElement.play();
    // Script for the button icon to change on click from Play to Pause 
    playButton.style.backgroundImage = "url('./icons/pause.svg')";
  } else {
    // Script to Pause the video if it's playing
    videoElement.pause();
    // Script for the button icon to change from Pause to Play 
    playButton.style.backgroundImage = "url('./icons/play.svg')";
  }
}

// Script to enable interaction by clicking the button to Play or Pause the video 
playButton.addEventListener('click', playPause);

// Script to Play or Pause by clicking the Video instead of the button, Inspired by YouTube 
videoElement.addEventListener('click', playPause);

// Script for the video timeline 
videoElement.addEventListener('timeupdate', () => {
  progressBar.value = videoElement.currentTime;
});

function scrubToTime(e){
  let x = e.clientX - (progressBar.getBoundingClientRect().left + window.scrollX);
  videoElement.currentTime = clampZeroOne(x / progressBar.offsetWidth) * videoElement.duration;
}

progressBar.addEventListener('mousedown', scrubToTime);
progressBar.addEventListener('mousedown', (e) => {
  window.addEventListener('mousemove', scrubToTime);
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', scrubToTime);
  });
});

// Script to enable interaction by clicking the Mute or Unmute button  
function muteUnmute(){
  // console.log("mute/unmute");
  if(videoElement.muted){
    videoElement.muted = false;
    muteButton.style.backgroundImage = "url('./icons/mute.svg')";
  } else {
    videoElement.muted = true;
    muteButton.style.backgroundImage = "url('./icons/unmute.svg')";
  }
}

// Loop function, scrapped because I need to choose and use only 1 additional feature for the video player- which is the full screen function
function loop(){
}

// Script to enable interaction by clicking the Full Screen button to make the video size to fit the screen, not to make the webpage full screen (different code and function)
function fullscreenfunction() {
// ref https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen#requesting_fullscreen_mode 
// Fullscreen function 
  videoElement.requestFullscreen()
}

// Script to enable the Mute or Unmute button 
muteButton.addEventListener("click", muteUnmute);

// loopButton.addEventListener("click", loop);

fullscreenButton.addEventListener("click", fullscreenfunction); 

/* HELPER FUNCTIONS */

function clampZeroOne(input){
  return Math.min(Math.max(input, 0), 1);
}

function logEvent(e){
  console.log(e);
}

