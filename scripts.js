// Get our elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');



// Build our functions
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  // Same as above
  // if(video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
}

function toggleButton() {
  const method = video.paused ? toggle.innerHTML = '►': toggle.innerHTML = '⏸';
}


// Hook up event listeners
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
