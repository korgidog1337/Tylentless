:root {
  --bg: #0a0a0f;
  --text: #e0e0ff;
  --accent: #6a5acd; /* мягкий индиго */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: 'Segoe UI', system-ui, sans-serif;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.waves-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: -1;
}

.waves {
  width: 100%;
  height: auto;
  animation: waveMove 12s linear infinite;
}

@keyframes waveMove {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.centered-text {
  text-align: center;
  font-size: 26px;
  line-height: 1.8;
  max-width: 600px;
  padding: 0 20px;
  font-weight: 400;
  letter-spacing: 0.8px;
  text-shadow: 0 0 10px rgba(106, 90, 205, 0.4);
}

.centered-text a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
}

.centered-text a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent);
  transition: width 0.3s ease;
}

.centered-text a:hover::after {
  width: 100%;
}

/* Адаптивность */
@media (max-width: 600px) {
  .centered-text {
    font-size: 20px;
    padding: 0 15px;
  }

  .waves {
    animation-duration: 8s;
  }
}