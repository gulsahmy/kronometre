let running = false;
let interval;
let milliseconds = 0;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

function updateDisplay() {
    let hours = Math.floor(milliseconds / 3600000);
    let minutes = Math.floor((milliseconds - (hours * 3600000)) / 60000);
    let seconds = Math.floor((milliseconds - (hours * 3600000) - (minutes * 60000)) / 1000);
    let millisecondsDisplay = milliseconds % 1000;

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(millisecondsDisplay, 3)}`;
}

function pad(number, length = 2) {
    return ('0'.repeat(length) + number).slice(-length);
}

startStopButton.addEventListener('click', function() {
    if (!running) {
        interval = setInterval(() => {
            milliseconds += 10;
            updateDisplay();
        }, 10);
        running = true;
        startStopButton.textContent = 'Durdur';
    } else {
        clearInterval(interval);
        running = false;
        startStopButton.textContent = 'Başlat';
    }
});

resetButton.addEventListener('click', function() {
    clearInterval(interval);
    milliseconds = 0;
    updateDisplay();
    if (running) {
        interval = setInterval(() => {
            milliseconds += 10;
            updateDisplay();
        }, 10);
    }
});

// İlk ekran yüklendiğinde göstergeyi sıfırla
updateDisplay();