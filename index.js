const lightToggle = document.querySelector('.light-toggle');
const conditionerToogle = document.querySelector('.conditioner-toggle');
const tvToggle = document.querySelector('.tv-toggle');
const soundToggle = document.querySelector('.sound-toggle');
const cookerToogle = document.querySelector('.cooker-toogle');
const jalousieToogle = document.querySelector('.jalousie-toggle');
const securityToggle = document.querySelector('.security-toggle');
const lightsToggle = document.querySelector('.lights-toggle');
const appliancesToogle = document.querySelector('.appliances-toogle');
let active = false;

function toggle(element) {
    let toggle = element.querySelector('.toggle');
    let text = element.querySelector('.text');
    let active = toggle.classList.contains('active');
    if (!active) {
        toggle.classList.add('active');
        text.innerHTML = 'ON';
    } else {
        toggle.classList.remove('active');
        text.innerHTML = 'OFF';
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


// Air conditioner input
const acTemperatureInput = document.querySelector('.ac-temperature');
const conditionerToggle = document.querySelector('.conditioner-toggle');
const textConditioner = document.querySelector('.text-conditioner');

acTemperatureInput.addEventListener('input', () => {
    const percent = ((acTemperatureInput.value - acTemperatureInput.min) / (acTemperatureInput.max - acTemperatureInput.min) * 100).toFixed(0);
    textConditioner.textContent = `${percent}%`;
});

// Sound system input
const soundSystemInput = document.querySelector('.sound-system-volume');
const soundSystemToggle = document.querySelector('.sound-toggle');
const textSoundSystem = document.querySelector('.text-sound');

let previousVolume = 50;
soundSystemInput.addEventListener('input', () => {
    const newVolume = parseInt(soundSystemInput.value, 10);
    const volumeDifference = newVolume - previousVolume;
    const direction = volumeDifference > 0 ? 'is increasing' : 'is decreasing';

    textSoundSystem.textContent = `Sound ${direction} on ${Math.abs(volumeDifference)}% (volume level: ${newVolume})`;
    previousVolume = newVolume;
});
