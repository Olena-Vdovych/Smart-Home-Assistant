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