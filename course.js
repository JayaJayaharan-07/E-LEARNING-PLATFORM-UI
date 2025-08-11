const video = document.getElementById("videoPlayer");
const progressBar = document.getElementById("progressBar");
const statusMsg = document.getElementById("statusMsg");

const videoKey = "html-course-video-progress";

// Load saved progress on load
window.addEventListener("load", () => {
  const savedTime = localStorage.getItem(videoKey);
  if (savedTime && !isNaN(savedTime)) {
    video.currentTime = parseFloat(savedTime);
  }
});

// Update progress while video is playing
video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent.toFixed(2)}%`;
  progressBar.textContent = `${percent.toFixed(0)}%`;
  statusMsg.textContent = `Progress: ${percent.toFixed(0)}%`;

  // Save progress
  localStorage.setItem(videoKey, video.currentTime);
});

// Clear progress when finished
video.addEventListener("ended", () => {
  localStorage.removeItem(videoKey);
  progressBar.style.width = "100%";
  progressBar.textContent = "100%";
  statusMsg.textContent = "Completed!";
});
