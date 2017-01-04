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
  // Kelly's Solution
  // const icon = video.paused ? toggle.innerHTML = '►': toggle.innerHTML = '⏸';
  const icon = this.paused ? '▶️' : '⏸';
  toggle.textContent = icon;
}

function skip() {
  // Kelly's Solution
  // if (this.dataset.skip=== "25") {
  //   video.currentTime= video.currentTime + 25;
  // } else if (this.dataset.skip === "-10") {
  //   video.currentTime = video.currentTime - 10;
  // } else {
  //   return;
  // }
  video.currentTime +=  parseFloat(this.dataset.skip);
}

function handleRangeUpdate () {
  console.log(this.name);
  const volume = this.name === "volume" ? video.volume = this.value : null;
  const playbackRate = this.name === "playbackRate" ? video.playbackRate = this.value : null;
}

// Hook up event listeners
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);
video.addEventListener('click', togglePlay);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(c => c.addEventListener('click', skip));

ranges.forEach( c => c.addEventListener('change', handleRangeUpdate));
