// video content
let videoPlayer = document.getElementById("videoPlayer");
let myVideo = document.getElementById("myVideo");

function stopVideo() {
  videoPlayer.style.display = "none";
  myVideo.pause();
}

function playVideo(file) {
  myVideo.src = file;
  myVideo.play();
  videoPlayer.style.display = "block";
}
// menu
let navItem = document.querySelector(".nav-item");
let bars = document.querySelector(".bars");
let links = document.querySelectorAll(".link");

bars.addEventListener("click", () => {
  bars.classList.toggle("change");
  navItem.classList.toggle("slideIn");
});

function slide() {
  bars.classList.toggle("change");
  navItem.classList.remove("slideIn");
}
