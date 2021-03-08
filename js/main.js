let strTenthOfSeconds = 00;
let strSeconds = 00;
let strMinutes = 00;
let strHours = 00;
let tenthOfSeconds = 00;
let seconds = 0;
let minutes = 0;
let hours = 0;
let strTime = "00:00:00:00";
let currentTime;
let elapsedTime = 0;
let startTime;
let displayTime = document.querySelector(".timeDisplay");
let start = document.querySelector("#btnStart");
let stop = document.querySelector("#btnStop");
let reset = document.querySelector("#btnReset");

// Initialize states
start.disabled = false;
stop.disabled = true;

// Function Update Display
updateDisplay = (currentTime) => {
  displayTime.innerText = currentTime;
};

//Function Update Time
updateTime = () => {
  elapsedTime = Math.floor(Date.now() - startTime);

  tenthOfSeconds = Math.floor(elapsedTime / 10) % 60;
  seconds = Math.floor(elapsedTime / 1000) % 60;
  minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
  hours = Math.floor(elapsedTime / (1000 * 3600)) % 24;

  //00:00:00:00
  tenthOfSeconds < 10
    ? (strTenthOfSeconds = "0" + tenthOfSeconds)
    : (strTenthOfSeconds = tenthOfSeconds);

  seconds < 10 ? (strSeconds = "0" + seconds) : (strSeconds = seconds);

  minutes < 10 ? (strMinutes = "0" + minutes) : (strMinutes = minutes);

  hours < 10 ? (strHours = "0" + hours) : (strHours = hours);

  currentTime = `${strHours}:${strMinutes}:${strSeconds}:${strTenthOfSeconds}`;

  updateDisplay(currentTime);
};

// Function Start Stopwatch
start.onclick = () => {
  startTime = Date.now();
  //console.log(startTime + " " + typeof startTime);
  stopWatch = setInterval(updateTime, 10);
  start.disabled = true;
  stop.disabled = false;
};

// Function Stop Stopwatch;
stop.onclick = () => {
  clearInterval(stopWatch);
  start.disabled = false;
  stop.disabled = true;
};

// Function reset Stopwatch;
reset.onclick = () => {
  tenthOfSeconds = 0;
  seconds = 0;
  console.log("resetting");
  clearInterval(stopWatch);
  start.disabled = false;
  stop.disabled = true;
  displayTime.innerText = strTime;
};
