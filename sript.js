const videoElement = document.getElementById('main-video');
const playPauseButton = document.getElementById('play-pause');
const volumeSlider = document.getElementById('volume-slider');
const volumeDisplay = document.getElementById('volume');
const videoListItems = document.querySelectorAll('#videos li');

// Play/Pause Video
playPauseButton.addEventListener('click', () => {
    if (videoElement.paused) {
        videoElement.play();
        playPauseButton.textContent = 'Pause';
    } else {
        videoElement.pause();
        playPauseButton.textContent = 'Play';
    }
});

// Volume Control
volumeSlider.addEventListener('input', () => {
    videoElement.volume = volumeSlider.value;
    volumeDisplay.textContent = `Volume: ${Math.round(volumeSlider.value * 100)}%`;
});

// Change video on clicking the list
videoListItems.forEach(item => {
    item.addEventListener('click', () => {
        const videoSource = item.getAttribute('data-video');
        videoElement.src = videoSource;
        videoElement.play();
        playPauseButton.textContent = 'Pause';
    });
});
