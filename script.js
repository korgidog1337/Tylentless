document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bgMusic');
  const body = document.getElementById('body');

  const unlockAudio = () => {
    audio.play().then(() => {
      body.removeEventListener('click', unlockAudio);
      body.removeEventListener('touchstart', unlockAudio);
    }).catch(e => console.warn("Audio play failed:", e));
  };

  audio.play().catch(unlockAudio);
  body.addEventListener('click', unlockAudio);
  body.addEventListener('touchstart', unlockAudio);
});