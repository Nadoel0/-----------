const timerElement = document.getElementById("timer");
const timerIcon = document.getElementById("timerIcon");
const hoursElement = document.getElementById("hours");
const timerButton = document.getElementById("timerButton");

let timer;
let duration = 0;
let timerLeft;

function startTimer() {
  duration = parseInt(hoursElement.value) * 3600;

  if (isNaN(duration) || duration <= 0) {
    alert("Введите корректное число");
    return;
  }

  timerLeft = duration;

  timer = setInterval(updateTimer, 1000);

  hoursElement.value = '';
}

function updateTimer() {
  if (timerLeft > 0) {
    timerLeft--;
    const precRem = ((duration - timerLeft) / duration) * 100;
    const dashOffset = (precRem / 100) * 282;
    console.log(dashOffset);
    const timerPath = `<circle class="timer-path" cx="50%" cy="50%" r="45%" stroke-dasharray="282" stroke-dashoffset="${dashOffset}" />`;

    const hours = formatNumber(Math.floor(timerLeft / 3600));
    const minutes = formatNumber(Math.floor((timerLeft % 3600) / 60));
    const seconds = formatNumber(timerLeft % 60);

    timerIcon.innerHTML = timerPath;
    timerElement.innerText = `${hours}:${minutes}:${seconds}`;
  } else {
    clearInterval(timer);
    timerIcon = "";
    alert("Ваше время вышло");
  }
}

function formatNumber(num) {
  return num < 10 ? `0${num}` : num;
}

timerButton.addEventListener("click", startTimer);
