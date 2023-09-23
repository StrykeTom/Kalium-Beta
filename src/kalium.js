const kalium = document.querySelector('.kalium');
const kaliumSound = document.querySelector('#kalium-sound');
let isKaliumClickable = true;

function jumpKalium() {
  const jumpHeight = 50;
  const originalPosition = kalium.getBoundingClientRect().top;
  kalium.style.top = `${originalPosition - jumpHeight}px`;
  kalium.classList.add('jump');
  setTimeout(() => {
    kalium.style.top = `${originalPosition}px`;
    kalium.classList.remove('jump');
    isKaliumClickable = true;
  }, 500);
}

function playKaliumSound() {
  kaliumSound.currentTime = 0;
  kaliumSound.play();
}

function handleClick() {
  if (!isKaliumClickable) return;
  isKaliumClickable = false;
  jumpKalium();
  playKaliumSound();
}

kalium.addEventListener('click', handleClick);