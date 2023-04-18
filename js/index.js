let active = false;

function toggle(element, lightId) {
    let toggleSwitch = element.querySelector('.toggle');
    let text = element.querySelector('.text');
    let acTemperatureInput = element.querySelector('.ac-temperature-input');
    let soundSystemInput = element.querySelector('.sound-system-input');
    let jalousieInput = element.querySelector('.jalousie-system-input');
    let tvToggle = document.querySelector('.tv-toggle');
    let chanelText = document.querySelector('.chanel-text');
    let active = toggleSwitch.classList.contains('active');
    if (!active) {
        toggleSwitch.classList.add('active');
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
        if (lightId) {
            let light = document.querySelector('.lightId');
            if (light) {
                light.classList.add('on');
            }
        }
    } else {
        toggleSwitch.classList.remove('active');
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
        if (lightId) {
            let light = document.querySelector('.lightId');
            if (light) {
                light.classList.remove('on');
            }
        }
        if (tvToggle) {
            chanelText.style.display = 'none';
        }
    }
    return toggleSwitch;
}

const bedroomLightToggle = document.querySelector('.bedroom-light_toggle');
bedroomLightToggle.addEventListener('click', function () {
    toggle(document.querySelector('#bedroom-light'));
});

const conditionerToggle = document.querySelector('.conditioner-toggle');
conditionerToggle.addEventListener('click', function () {
    toggle(document.querySelector('#ac'));
});

const tvToggle = document.querySelector('.tv-toggle');
tvToggle.addEventListener('click', function () {
    let toggleSwitch = toggle(document.querySelector('#tv'));
    let deviceText = document.querySelector('.device-text');
    deviceText.style.display = toggleSwitch.classList.contains('active') ? 'block' : 'none';
});

const soundToggle = document.querySelector('.sound-toggle');
soundToggle.addEventListener('click', function () {
    toggle(document.querySelector('#sound-system'));
});

const livingRoomLightToggle = document.querySelector('.livingroom-light_toggle');
livingRoomLightToggle.addEventListener('click', function () {
    toggle(document.querySelector('#livingroom-light'));
});

const cookerToggle = document.querySelector('.cooker-toggle');
cookerToggle.addEventListener('click', function () {
    toggle(document.querySelector('#cooker'));
});

const jalousieToggle = document.querySelector('.jalousie-toggle');
jalousieToggle.addEventListener('click', function () {
    toggle(document.querySelector('#jalousie'));
});

const kitchenLightToggle = document.querySelector('.kitchen-light_toggle');
kitchenLightToggle.addEventListener('click', function () {
    toggle(document.querySelector('#kitchen-light'));
});

const securityToggle = document.querySelector('.security-toggle');
const securityImage = document.querySelector('.security img');
securityToggle.addEventListener('click', function () {
    let securityText = document.getElementById('security-status');
    toggle(document.querySelector('#security'));
    securityText.innerHTML = document.querySelector('#security .toggle').classList.contains('active') ? 'TURN ON' : 'TURN OFF';
});

const lightsToggle = document.querySelector('.lights-toggle');
lightsToggle.addEventListener('click', function () {
    let lightText = document.getElementById('lights-status');
    toggle(document.querySelector('#lights'), 'lights');
    toggle(document.querySelector('#bedroom-light'), 'bedroom-light_toggle');
    toggle(document.querySelector('#livingroom-light'), 'livingroom-light_toggle');
    toggle(document.querySelector('#kitchen-light'), 'kitchen-light_toggle');
    lightText.innerHTML = document.querySelector('#lights .toggle').classList.contains('active') ? 'TURN ON' : 'TURN OFF';
});

const appliancesToggle = document.querySelector('.appliances-toggle');
let appliancesActive = false;

appliancesToggle.addEventListener('click', function () {
    let appliancesText = document.getElementById('appliances-status');
    let securityText = document.getElementById('security-status');
    let lightText = document.getElementById('lights-status');
    let acTemperatureInput = document.querySelector('.ac-temperature-input');
    let soundSystemInput = document.querySelector('.sound-system-input');
    let jalousieInput = document.querySelector('.jalousie-system-input');
    let deviceText = document.querySelector('.device-text');
    toggle(document.querySelector('#appliances'));
    appliancesText.innerHTML = document.querySelector('#appliances .toggle').classList.contains('active') ? 'TURN ON' : 'TURN OFF';
    securityText.innerHTML = document.querySelector('#security .toggle').classList.contains('active') ? 'TURN OFF' : 'TURN ON';
    lightText.innerHTML = document.querySelector('#lights .toggle').classList.contains('active') ? 'TURN OFF' : 'TURN ON';

    const offElements = document.querySelectorAll('.text');
    for (let i = 0; i < offElements.length; i++) {
        if (offElements[i].innerHTML === 'OFF') {
            offElements[i].innerHTML = 'ON';
        } else {
            offElements[i].innerHTML = 'OFF';
        }
    }

    if (!appliancesActive) {
        appliancesActive = true;
        conditionerToggle.classList.add('active');
        acTemperatureInput.style.display = 'block';
        tvToggle.classList.add('active');
        deviceText.style.display = 'block';
        soundToggle.classList.add('active');
        soundSystemInput.style.display = 'block';
        textSoundSystem.style.display = 'block';
        cookerToggle.classList.add('active');
        jalousieToggle.classList.add('active');
        jalousieInput.style.display = 'block';
        textJalousie.style.display = 'block';
        securityToggle.classList.add('active');
        bedroomLightToggle.classList.add('active');
        livingRoomLightToggle.classList.add('active');
        kitchenLightToggle.classList.add('active');
        lightsToggle.classList.add('active');
    }
    else {
        appliancesActive = false;
        conditionerToggle.classList.remove('active');
        acTemperatureInput.style.display = 'none';
        tvToggle.classList.remove('active');
        deviceText.style.display = 'none';
        soundToggle.classList.remove('active');
        soundSystemInput.style.display = 'none';
        textSoundSystem.style.display = 'none';
        cookerToggle.classList.remove('active');
        jalousieToggle.classList.remove('active');
        jalousieInput.style.display = 'none';
        textJalousie.style.display = 'none';
        securityToggle.classList.remove('active');
        bedroomLightToggle.classList.remove('active');
        livingRoomLightToggle.classList.remove('active');
        kitchenLightToggle.classList.remove('active');
        lightsToggle.classList.remove('active');
    }
});
