window.addEventListener('keydown', playAudio);

function playAudio(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (audio){
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(event) {
  this.classList.remove('playing');
}