// Open TV container 
function openTvContainer() {
    let deviceText = document.querySelector('.device-text');
    deviceText.style.display = 'none';
    let tvContainer = document.getElementById("tv-container");
    tvContainer.style.display = "block";

    // Restore saved volume and channel
    const savedVolume = localStorage.getItem('tvVolume');
    if (savedVolume !== null) {
        volumeLevel = parseInt(savedVolume);
        volumeBar.style.width = volumeLevel + '%';
    }
    const savedChannel = localStorage.getItem('tvChannel');
    if (savedChannel !== null) {
        channelSelect.value = savedChannel;
        updateChannelText(savedChannel);
    }
}
updateSelectedChannelText();

function closeTvContainer() {
    let deviceText = document.querySelector('.device-text');
    deviceText.style.display = 'block';
    let tvContainer = document.getElementById("tv-container");
    tvContainer.style.display = "none";

    // Remove saved volume and channel
    localStorage.removeItem('tvVolume');

    let chanelText = document.querySelector('.chanel-text');
    chanelText.innerHTML = ''; // Hide the text
}

function updateSelectedChannelText() {
    const tvContainer = document.getElementById('tv-container');
    if (tvContainer.style.display === 'block') {
        const selectedChannel = channelSelect.value;
        let chanelText = document.querySelector('.chanel-text');
        chanelText.innerHTML = `You are watching channel ${selectedChannel}`;
    }
}


// Changed TV channels and volume
const volumeUpBtn = document.getElementById('volume-up');
const volumeDownBtn = document.getElementById('volume-down');
const volumeBar = document.getElementById('volume-bar');

let volumeLevel = 50;

volumeUpBtn.addEventListener('click', () => {
    if (volumeLevel < 100) {
        volumeLevel += 10;
        volumeBar.style.width = volumeLevel + '%';
        localStorage.setItem('tvVolume', volumeLevel.toString());
    }
});

volumeDownBtn.addEventListener('click', () => {
    if (volumeLevel > 0) {
        volumeLevel -= 10;
        volumeBar.style.width = volumeLevel + '%';
        localStorage.setItem('tvVolume', volumeLevel.toString());
    }
});

const channelSelect = document.getElementById('channel-select');

channelSelect.addEventListener('change', () => {
    const selectedChannel = channelSelect.value;
    localStorage.setItem('tvChannel', selectedChannel);
    updateChannelText(selectedChannel);
    channelSelect.blur();
});

updateSelectedChannelText();

// Update the text showing the currently selected channel
function updateChannelText(selectedChannel) {
    let chanelText = document.querySelector('.chanel-text');
    chanelText.innerHTML = `You are watching channel ${selectedChannel}`;
}

// Handle clicks on all buttons
const allButtons = document.querySelectorAll('button');
allButtons.forEach(button => {
    button.addEventListener('click', event => {
        if (event.target.closest('#tv-container')) {
            const selectedChannel = channelSelect.value;
            localStorage.setItem('tvChannel', selectedChannel);
            updateChannelText(selectedChannel);
        } else if (event.target.matches('#close-tv')) {
            closeTvContainer();
        }
    });
});

