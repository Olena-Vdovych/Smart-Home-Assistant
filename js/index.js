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

const lightToggle = document.querySelector('.light-toggle');
lightToggle.addEventListener('click', function () {
    toggle(document.querySelector('#light'));
});

const conditionerToogle = document.querySelector('.conditioner-toggle');
conditionerToogle.addEventListener('click', function () {
    toggle(document.querySelector('#ac'));
});

const tvToggle = document.querySelector('.tv-toggle');
const closeTvBtn = document.getElementById('close-tv');
const tv = document.querySelector('#tv');
const myTvContainer = document.getElementById('tv-container');
tvToggle.addEventListener('click', function () {
    if (tv.classList.contains('on')) {
        tv.classList.remove('on');
    } else {
        tv.classList.add('on');
    }
    myTvContainer.style.display = 'block';
});
closeTvBtn.addEventListener('click', () => {
    myTvContainer.style.display = 'none';
});

const soundToggle = document.querySelector('.sound-toggle');
soundToggle.addEventListener('click', function () {
    toggle(document.querySelector('#sound-system'));
});

const cookerToogle = document.querySelector('.cooker-toogle');
cookerToogle.addEventListener('click', function () {
    toggle(document.querySelector('#cooker'));
});

const jalousieToogle = document.querySelector('.jalousie-toggle');
jalousieToogle.addEventListener('click', function () {
    toggle(document.querySelector('#jalousie'));
});

const securityToggle = document.querySelector('.security-toggle');
securityToggle.addEventListener('click', function () {
    let securityText = document.getElementById('security-status');
    toggle(document.querySelector('#security'));
    securityText.innerHTML = document.querySelector('#security .toggle').classList.contains('active') ? 'TURN ON' : 'TURN OFF';
});

const lightsToggle = document.querySelector('.lights-toggle');
lightsToggle.addEventListener('click', function () {
    let lightText = document.getElementById('lights-status');
    toggle(document.querySelector('#lights'));
    lightText.innerHTML = document.querySelector('#lights .toggle').classList.contains('active') ? 'TURN ON' : 'TURN OFF';
});

const appliancesToggle = document.querySelector('.appliances-toogle');
appliancesToggle.addEventListener('click', function () {
    let appliancesText = document.getElementById('appliances-status');
    toggle(document.querySelector('#appliances'));
    appliancesText.innerHTML = document.querySelector('#appliances .toggle').classList.contains('active') ? 'TURN ON' : 'TURN OFF';
});

