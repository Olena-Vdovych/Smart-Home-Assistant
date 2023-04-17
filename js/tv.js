// Open TV container 
function openTvContainer() {
    let deviceText = document.querySelector('.device-text');
    deviceText.style.display = 'none';
    let tvContainer = document.getElementById("tv-container");
    tvContainer.style.display = "block";
}

function closeTvContainer() {
    let deviceText = document.querySelector('.device-text');
    deviceText.style.display = 'block';
    let tvContainer = document.getElementById("tv-container");
    tvContainer.style.display = "none";
}

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
    let chanelText = document.querySelector('.chanel-text');
    chanelText.innerHTML = `You are watching channel ${selectedChannel}`;
});

// Update the text showing the currently selected channel whenever any button on the page is clicked

const allButtons = document.querySelectorAll('button');
allButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedChannel = channelSelect.value;
        let chanelText = document.querySelector('.chanel-text');
        chanelText.innerHTML = `You are watching channel ${selectedChannel}`;
    });
});
