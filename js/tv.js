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
        let chanelText = document.querySelector('.chanel-text');
        chanelText.innerHTML = `You are watching channel ${savedChannel}`;
    }
}

function closeTvContainer() {
    let deviceText = document.querySelector('.device-text');
    deviceText.style.display = 'block';
    let tvContainer = document.getElementById("tv-container");
    tvContainer.style.display = "none";

    // Remove saved volume and channel
    localStorage.removeItem('tvVolume');
    localStorage.removeItem('tvChannel');
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
    let chanelText = document.querySelector('.chanel-text');
    chanelText.innerHTML = '';
    channelSelect.blur();
});

// Update the text showing the currently selected channel whenever any button on the page is clicked
const allButtons = document.querySelectorAll('button');
allButtons.forEach(button => {
    button.addEventListener('click', event => {
        if (event.target.closest('#tv-container')) {
            const selectedChannel = channelSelect.value;
            localStorage.setItem('selectedChannel', selectedChannel);
            let chanelText = document.querySelector('.chanel-text');
            chanelText.innerHTML = `You are watching channel ${selectedChannel}`;
        } else if (event.target.matches('#close-tv')) {
            localStorage.removeItem('selectedChannel');
            let chanelText = document.querySelector('.chanel-text');
            chanelText.innerHTML = '';
            closeTvContainer();
        }
    });
});

// Check localStorage for previously selected channel on page load
window.addEventListener('load', () => {
    const savedChannel = localStorage.getItem('tvChannel');
    if (savedChannel !== null) {
        channelSelect.value = savedChannel;
        channelSelect.blur();
    }
});
