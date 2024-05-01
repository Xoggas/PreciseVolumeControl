const VolumeSliderSize = {
  Minimized: 10,
  Full: 100,
};

const middleButtonIndex = 1;
const volumeIcon = document.querySelector('tp-yt-paper-icon-button.volume');
const volumeSlider = document.querySelector('#volume-slider');

let volumeSliderSize = VolumeSliderSize.Full;

function getOppositeVolumeSliderSize() {
  return volumeSliderSize == VolumeSliderSize.Full ? VolumeSliderSize.Minimized : VolumeSliderSize.Full;
}

volumeIcon.addEventListener('auxclick', (event) => {
  if (event.button != middleButtonIndex) {
    return;
  }

  volumeSliderSize = getOppositeVolumeSliderSize();

  volumeSlider.setAttribute('max', volumeSliderSize);
  volumeSlider.setAttribute('aria-valuemax', volumeSliderSize);
});

