// selecting necessary dom elements with querySelector
var video = document.querySelector(".video");
var play = document.getElementById("play-pause");
const rewind = document.querySelector('.fa-backward');
const forward = document.querySelector('.fa-forward');

// playing and pausing the video by condition
// changing play pause icon alongside
function togglePlayPause() {
  if (video.paused) {
    play.className = "pause";
    video.play();
  }
  else {
    play.className = "play";
    video.pause();
  }
}

play.onclick = function () {
  togglePlayPause();
};

video.addEventListener('timeupdate', function () {
  if (video.ended) {
    play.className = "play";
  }
})

rewind.addEventListener('click', mediaRewind);
forward.addEventListener('click', mediaForward);

// rewinding video 5 second
function mediaRewind() {
  video.currentTime -= 5;
}

// forwarding video 5 second
function mediaForward() {
  video.currentTime += 5;
}
