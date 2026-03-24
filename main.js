const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
let hours = 0, minutes = 0, seconds = 0;
let intervalId = null;
let isRunning = false;
function formatTime(value) {
    return value < 10 ? '0' + value : value;
}
function updateDisplay() {
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}
function tick() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}
function startTimer() {
    if (!isRunning) {
        intervalId = setInterval(tick, 1000);
        isRunning = true;
    }
}
function stopTimer() {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
    }
}
function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
updateDisplay();