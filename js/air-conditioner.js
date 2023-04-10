// Air conditioner input temperature

const decreaseTempButton = document.getElementById('decrease-temp');
const increaseTempButton = document.getElementById('increase-temp');
const acTempInput = document.getElementById('ac-temp');
const acTemperatureInput = document.querySelector('.ac-temperature');

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