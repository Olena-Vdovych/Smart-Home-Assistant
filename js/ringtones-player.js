const melodySelect = document.getElementById('melody-select');
const audioPlayer = document.getElementById('audio-player');

melodySelect.addEventListener('click', () => {
    const selectedValue = melodySelect.value;
    audioPlayer.src = selectedValue;
});

audioPlayer.addEventListener('play', () => {
});

audioPlayer.addEventListener('pause', () => {
});