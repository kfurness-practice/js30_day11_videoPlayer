// Get our elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');
const fullScreen = document.querySelector('.fullScreen');



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
  // Kelly's solution
  // const volume = this.name === "volume" ? video.volume = this.value : null;
  // const playbackRate = this.name === "playbackRate" ? video.playbackRate = this.value : null;
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub (e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function fullscreen() {
   if (!document.fullscreenElement) {
      if (video.requestFullscreen) {
    	video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
    	video.webkitRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
    	video.mozRequestFullScreen();
    } else if (video.msRequestFullscreen) {
    	video.msRequestFullscreen();
        }
  } else {
      if (player.exitFullscreen) {
      	player.exitFullscreen();
      } else if (player.webkitExitFullscreen) {
      	player.webkitExitFullscreen();
      } else if (player.mozCancelFullScreen) {
      	player.mozCancelFullScreen();
      } else if (player.msExitFullscreen) {
      	player.msExitFullscreen();
      }
  }
}

// Hook up event listeners
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(c => c.addEventListener('click', skip));

ranges.forEach( c => c.addEventListener('change', handleRangeUpdate));
ranges.forEach( c => c.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreen.addEventListener('click', fullscreen);
