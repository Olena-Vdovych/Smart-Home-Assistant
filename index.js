const lightToggle = document.querySelector('.light-toggle');
const conditionerToogle = document.querySelector('.conditioner-toggle');
const tvToggle = document.querySelector('.tv-toggle');
const soundToggle = document.querySelector('.sound-toggle');
const cookerToogle = document.querySelector('.cooker-toogle');
const securityToggle = document.querySelector('.security-toggle');
const lightsToggle = document.querySelector('.lights-toggle');
const appliancesToggle = document.querySelector('.appliances-toogle');
const acTemperatureInput = document.querySelector('.ac-temperature');
const conditionerToggle = document.querySelector('.conditioner-toggle');
const textConditioner = document.querySelector('.text-conditioner');
const soundSystemInput = document.querySelector('.sound-system-volume');
const soundSystemToggle = document.querySelector('.sound-toggle');
const textSoundSystem = document.querySelector('.text-sound');
const jalousieInput = document.querySelector('.jalousie-system');
const jalousieToogle = document.querySelector('.jalousie-toggle');
const textJalousie = document.querySelector('.text-jalousie');

let active = false;

function toggle(element) {
    let toggle = element.querySelector('.toggle');
    let text = element.querySelector('.text');
    let acTemperatureInput = element.querySelector('.ac-temperature-input');
    let soundSystemInput = element.querySelector('.sound-system-input');
    let jalousieInput = element.querySelector('.jalousie-system-input');
    let active = toggle.classList.contains('active');
    if (!active) {
        toggle.classList.add('active');
        text.innerHTML = 'ON';
        if (acTemperatureInput) {
            acTemperatureInput.style.display = 'block';
        }
        if (soundSystemInput) {
            soundSystemInput.style.display = 'block';
            textSoundSystem.style.display = 'block';
        }
        if (jalousieInput) {
            jalousieInput.style.display = 'block';
            textJalousie.style.display = 'block';
        }
    } else {
        toggle.classList.remove('active');
        text.innerHTML = 'OFF';
        if (acTemperatureInput) {
            acTemperatureInput.style.display = 'none';
        }
        if (soundSystemInput) {
            soundSystemInput.style.display = 'none';
            textSoundSystem.style.display = 'none';
        }
        if (jalousieInput) {
            jalousieInput.style.display = 'none';
            textJalousie.style.display = 'none';
        }
    }
}

lightToggle.addEventListener('click', function () {
    toggle(document.querySelector('#light'));
});
conditionerToogle.addEventListener('click', function () {
    toggle(document.querySelector('#ac'));
});
tvToggle.addEventListener('click', function () {
    toggle(document.querySelector('#tv'));
});
soundToggle.addEventListener('click', function () {
    toggle(document.querySelector('#sound-system'));
});
cookerToogle.addEventListener('click', function () {
    toggle(document.querySelector('#cooker'));
});
jalousieToogle.addEventListener('click', function () {
    toggle(document.querySelector('#jalousie'));
});
securityToggle.addEventListener('click', function () {
    let securityText = document.getElementById('security-status');
    toggle(document.querySelector('#security'));
    securityText.innerHTML = document.querySelector('#security .toggle').classList.contains('active') ? 'TURN ON' : 'TURN OFF';
});

lightsToggle.addEventListener('click', function () {
    let lightText = document.getElementById('lights-status');
    toggle(document.querySelector('#lights'));
    lightText.innerHTML = document.querySelector('#lights .toggle').classList.contains('active') ? 'TURN ON' : 'TURN OFF';
});
appliancesToggle.addEventListener('click', function () {
    let appliancesText = document.getElementById('appliances-status');
    toggle(document.querySelector('#appliances'));
    appliancesText.innerHTML = document.querySelector('#appliances .toggle').classList.contains('active') ? 'TURN ON' : 'TURN OFF';
});

// Air conditioner input temperature

const decreaseTempButton = document.getElementById('decrease-temp');
const increaseTempButton = document.getElementById('increase-temp');
const acTempInput = document.getElementById('ac-temp');

decreaseTempButton.addEventListener('click', () => {
    if (acTempInput.checkValidity()) {
        acTempInput.stepDown();
        updateTemperature();
    }
});

increaseTempButton.addEventListener('click', () => {
    if (acTempInput.checkValidity()) {
        acTempInput.stepUp();
        updateTemperature();
    }
});

function updateTemperature() {
    const acTemperature = acTempInput.value;
    const acTemperatureText = `${acTemperature}°C`;
    acTempInput.setAttribute('value', acTemperatureText);
}

// Sound system input

let previousVolume = 50;
soundSystemInput.addEventListener('input', () => {
    const newVolume = parseInt(soundSystemInput.value, 10);
    const volumeDifference = newVolume - previousVolume;
    const direction = volumeDifference > 0 ? 'is increasing' : 'is decreasing';

    textSoundSystem.textContent = `Sound ${direction} on ${Math.abs(volumeDifference)}% (volume level: ${newVolume})`;
    previousVolume = newVolume;
});

// Jalousie input

jalousieInput.addEventListener('input', () => {
    const percent = ((jalousieInput.value - jalousieInput.min) / (jalousieInput.max - jalousieInput.min) * 100).toFixed(0);
    textJalousie.textContent = `${percent}%`;
});

// Termoregulation

//Changed variables for temperature
const temperatureLine = document.getElementById('temperature-line');
const temperatureRound = document.getElementById('temperature-round');
const temperature = document.getElementById('temperature');

function renderTermoregulation(temp) {
    const min = 10;
    const max = 30;
    const range = max - min;
    const percent = range / 100;
    const lineMin = 54;
    const lineMax = 276;
    const lineRange = lineMax - lineMin;
    const linePercent = lineRange / 100;
    const roundMin = -240;
    const roundMax = 48;
    const roundRange = roundMax - roundMin;
    const roundPercent = roundRange / 100;

    const finishPercent = Math.round((temp - min) / percent);
    const lineFinishPercent = lineMin + linePercent * finishPercent;
    const roundFinishPercent = roundMin + roundPercent * finishPercent;

    temperatureLine.style.strokeDasharray = `${lineFinishPercent} 276`;
    temperatureRound.style.transform = `rotate(${roundFinishPercent}deg)`;
    temperature.textContent = temp;
}

renderTermoregulation(16);

// Change the temperature with the mouse

const temperatureBtn = document.getElementById('temperature-btn');

function changeTemperature() {
    let mouseOver = false;
    let mouseDown = false;
    let position = 0;
    let range = 0;
    let change = 0;

    temperatureBtn.onmouseover = () => mouseOver = true;
    temperatureBtn.onmouseleave = () => mouseOver = false;
    temperatureBtn.onmouseup = () => mouseDown = false;
    temperatureBtn.onmousedown = (e) => {
        mouseDown = true;
        position = e.offsetY;
        range = 0;
    }
    temperatureBtn.onmousemove = (e) => {
        if (mouseOver && mouseDown) {
            range = e.offsetY - position;
            const newChange = Math.round(range / -50);
            if (newChange != change) {
                let temperature = document.getElementById('temperature');
                let temperatureValue = parseInt(temperature.innerText);

                if (newChange < change) {
                    temperature.textContent = temperatureValue - 1;
                } else {
                    temperature.textContent = temperatureValue + 1;
                    console.log(temperature.textContent, change);
                }

                renderTermoregulation(temperatureValue + change);
                change = newChange;
            }
        }
    }
}

changeTemperature();

// Changed TV channels and volume
const tvContainer = document.getElementById('tv-container');
const volumeUpBtn = document.getElementById('volume-up');
const volumeDownBtn = document.getElementById('volume-down');
const volumeBar = document.getElementById('volume-bar');
let volumeLevel = 50;

volumeUpBtn.addEventListener('click', () => {
    if (volumeLevel < 100) {
        volumeLevel += 10;
        volumeBar.style.width = volumeLevel + '%';
    }
});

volumeDownBtn.addEventListener('click', () => {
    if (volumeLevel > 0) {
        volumeLevel -= 10;
        volumeBar.style.width = volumeLevel + '%';
    }
});

const channelSelect = document.getElementById('channel-select');

channelSelect.addEventListener('change', () => {
    const selectedChannel = channelSelect.value;
});
