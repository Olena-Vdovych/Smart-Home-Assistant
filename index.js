const lightToggle = document.querySelector('.light-toggle');
const conditionerToogle = document.querySelector('.conditioner-toggle');
const tvToggle = document.querySelector('.tv-toggle');
const soundToggle = document.querySelector('.sound-toggle');
const cookerToogle = document.querySelector('.cooker-toogle');
const securityToggle = document.querySelector('.security-toggle');
const lightsToggle = document.querySelector('.lights-toggle');
const appliancesToogle = document.querySelector('.appliances-toogle');
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
        }
        if (jalousieInput) {
            jalousieInput.style.display = 'block';
        }
    } else {
        toggle.classList.remove('active');
        text.innerHTML = 'OFF';
        if (acTemperatureInput) {
            acTemperatureInput.style.display = 'none';
        }
        if (soundSystemInput) {
            soundSystemInput.style.display = 'none';
        }
        if (jalousieInput) {
            jalousieInput.style.display = 'none';
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
    toggle(document.querySelector('#security'));
});
lightsToggle.addEventListener('click', function () {
    toggle(document.querySelector('#lights'));
});
appliancesToogle.addEventListener('click', function () {
    toggle(document.querySelector('#appliances'));
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


