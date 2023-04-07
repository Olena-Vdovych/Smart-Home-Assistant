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
