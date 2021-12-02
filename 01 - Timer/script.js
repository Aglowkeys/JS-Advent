const minutesInput = document.querySelector('div.minutes input');
const secondsInput = document.querySelector('div.seconds input');
const minutes = minutesInput.value;

const startBtn = document.querySelector('button.start');
const settingsBtn = document.querySelector('button.settings');
const ring = document.querySelector('.ring');

let isTimerOn = false;

const validateNumber = (inputElement, maxValue) => {
    const value = inputElement.value;
    let validValue = '';

    for (let i = 0; i < value.length; i++) {
        let char = value[i];
        const regex = /\d/;
        if (regex.test(char)) {
            validValue += char;
        }
    }
    validValue = Number(validValue);

    if (validValue > maxValue) {
        validValue = maxValue;
    }

    inputElement.value = validValue;
};

settingsBtn.addEventListener('click', () => {
    minutesInput.toggleAttribute('disabled');
    secondsInput.toggleAttribute('disabled');
});

minutesInput.addEventListener('input', () => {
    validateNumber(minutesInput, 99);
});

secondsInput.addEventListener('input', () => {
    validateNumber(secondsInput, 59);
});

let secondsInterval;
let minutesInterval;
const start = () => {
    let seconds = Number(secondsInput.value);
    let minutes = Number(minutesInput.value);
    const totalSeconds = minutes * 60 + seconds;
    ring.style.animation = `dash ${totalSeconds}s linear reverse`;

    secondsInterval = setInterval(() => {
        if (seconds > 0) {
            seconds -= 1;
            secondsInput.value = seconds >= 10 ? seconds : '0' + seconds;
        }

        if (minutes > 0 && seconds === 0) {
            minutes -= 1;
            minutesInput.value = minutes >= 10 ? minutes : '0' + minutes;
            seconds = 59;
            secondsInput.value = seconds;
        }
    }, 1000);
};

const stop = () => {
    clearInterval(secondsInterval);
};

const disableElements = () => {
    settingsBtn.disabled = 'true';
    secondsInput.disabled = 'true';
    minutesInput.disabled = 'true';
};

startBtn.addEventListener('click', () => {
    isTimerOn = !isTimerOn;

    if (isTimerOn) {
        startBtn.innerText = 'start';
        stop();
        settingsBtn.removeAttribute('disabled');
    } else {
        startBtn.innerText = 'stop';
        start();
        disableElements();
    }
});
