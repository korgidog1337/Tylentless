document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bgMusic');
  const body = document.getElementById('body');

  // Аудио
  const unlockAudio = () => {
    audio.play().then(() => {
      body.removeEventListener('click', unlockAudio);
      body.removeEventListener('touchstart', unlockAudio);
    }).catch(e => console.warn("Audio play failed:", e));
  };
  audio.play().catch(unlockAudio);
  body.addEventListener('click', unlockAudio);
  body.addEventListener('touchstart', unlockAudio);

  // Анимация печати на ссылке
  const link = document.getElementById('typed-name');
  const fullText = '@tylentless';
  const href = 'https://t.me/tylentless';
  let i = 0;

  link.textContent = '';
  link.href = href; // важно!

  const typeInterval = setInterval(() => {
    if (i < fullText.length) {
      link.textContent += fullText.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
    }
  }, 110);

  // Частицы
  initParticles();
});

function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 180;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1 + 0.2;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.3 + 0.05;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
      if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }

    draw() {
      ctx.fillStyle = `rgba(220, 220, 220, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(8, 8, 13, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}