// main.js

// JavaScript code to display the current time
function updateTime() {
  const currentTimeElement = document.getElementById("current-time");
  const currentTime = new Date();
  currentTimeElement.textContent = currentTime.toLocaleTimeString();
}

// Update the time every second
setInterval(updateTime, 1000);
