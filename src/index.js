import "./styles.css";

const timeDisplay = document.querySelector(".timer");
const startBtn = document.querySelector(".timer__start");
const resetBtn = document.querySelector(".timer__reset");

let isCounting = false;
let time = 0;
let timerID;

function countUp() {
  time++;

  // 1 sec = 1000 milliseconds
  // time = 100 = 1 sec
  let min = Math.floor(time / 100 / 60); // Copied from somewhere
  let sec = Math.floor(time / 100); // Copied from somewhere
  if (sec >= 60) sec = sec % 60; // Copied from somewhere
  let milSec = Math.floor(time % 100); // Copied from somewhere

  let timeStr = `${min > 9 ? min : "0" + min}:${sec > 9 ? sec : "0" + sec}:${
    milSec > 9 ? milSec : "0" + milSec
  }`;

  timeDisplay.textContent = timeStr;
}

startBtn.addEventListener("click", startCounting);
resetBtn.addEventListener("click", resetTimer);

function startCounting() {
  if (isCounting) {
    clearInterval(timerID);
    isCounting = false;
    startBtn.textContent = "Resume";
  } else {
    timerID = setInterval(countUp, 10);
    startBtn.textContent = "STOP";
    startBtn.classList.remove("timer__start");
    startBtn.classList.add("timer__stop");
    isCounting = true;
  }
}

function resetTimer() {
  if (!isCounting) {
    timeDisplay.textContent = "00:00:00";
    startBtn.textContent = "Start";
    time = 0;
  }
}
