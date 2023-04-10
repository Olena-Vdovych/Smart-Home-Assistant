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