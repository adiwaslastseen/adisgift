/* =============================================
   BIRTHDAY SURPRISE — script.js
   ============================================= */

/* ── Floating hearts ── */
const bg = document.getElementById('hearts-bg');
['❤', '💗', '🌸', '💖', '✨', '💕'].forEach(ch => {
  for (let j = 0; j < 3; j++) {
    const el = document.createElement('span');
    el.className = 'fh';
    el.textContent = ch;
    el.style.left = `${Math.random() * 95}%`;
    el.style.animationDuration = `${9 + Math.random() * 8}s`;
    el.style.animationDelay = `${Math.random() * 9}s`;
    el.style.fontSize = `${0.9 + Math.random() * 0.8}rem`;
    bg.appendChild(el);
  }
});

/* ── Page navigation ── */
function go(n) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('p' + n).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Music ── */
const audio      = document.getElementById('bgMusic');
const musicBtn   = document.getElementById('musicBtn');
const musicLabel = document.getElementById('musicLabel');
let musicOn = false;

if (audio) {
  audio.preload = 'auto';
  audio.volume = 0.85;
  audio.addEventListener('error', () => {
    alert('Could not load the song. Please make sure song.mp3 is in the same folder as index.html.');
  });
}

function toggleMusic() {
  if (!audio) {
    alert('Audio element not found.');
    return;
  }

  if (!musicOn) {
    audio.load();

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          musicOn = true;
          musicLabel.textContent = 'Pause song';
          musicBtn.classList.add('playing');
        })
        .catch(error => {
          console.error('Audio play failed:', error);
          alert('Could not play music. Please tap the button once more or check the song file.');
        });
    }
  } else {
    audio.pause();
    musicOn = false;
    musicLabel.textContent = 'Play song';
    musicBtn.classList.remove('playing');
  }
}
/* ── Heart-catch game ── */

/* ── Heart-catch game ── */
const board    = document.getElementById('game-board');
const basket   = document.getElementById('basket');
const scoreEl  = document.getElementById('score');
const winBox   = document.getElementById('gameWin');
const startBtn = document.getElementById('startBtn');

let score = 0, running = false, spawnTimer = null;
const TARGET = 10; // change this if you want more/less hearts to catch

// Move basket — mouse
board.addEventListener('mousemove', e => {
  const r = board.getBoundingClientRect();
  basket.style.left = Math.max(8, Math.min(92, ((e.clientX - r.left) / r.width) * 100)) + '%';
});

// Move basket — touch (mobile)
board.addEventListener('touchmove', e => {
  const r = board.getBoundingClientRect();
  basket.style.left = Math.max(8, Math.min(92, ((e.touches[0].clientX - r.left) / r.width) * 100)) + '%';
}, { passive: true });

function startGame() {
  if (running) return;
  score = 0;
  running = true;
  scoreEl.textContent = '0';
  winBox.style.display = 'none';
  startBtn.style.display = 'none';
  document.querySelectorAll('.fheart').forEach(h => h.remove());
  spawnTimer = setInterval(spawnHeart, 700);
}

function spawnHeart() {
  const h = document.createElement('div');
  h.className = 'fheart';
  h.textContent = ['❤', '💗', '💖'][Math.floor(Math.random() * 3)];
  let top = -30;
  h.style.left = (5 + Math.random() * 85) + '%';
  h.style.top = top + 'px';
  board.appendChild(h);

  const iv = setInterval(() => {
    top += 4.5;
    h.style.top = top + 'px';

    const br = basket.getBoundingClientRect();
    const hr = h.getBoundingClientRect();
    const bh = board.getBoundingClientRect().height;

    const caught = hr.bottom >= br.top && hr.bottom <= br.bottom + 20
                && hr.left  <= br.right && hr.right >= br.left;

    if (caught) {
      clearInterval(iv);
      h.remove();
      score++;
      scoreEl.textContent = score;
      if (score >= TARGET) {
        running = false;
        clearInterval(spawnTimer);
        winBox.style.display = 'block';
      }
    } else if (top > bh + 30) {
      clearInterval(iv);
      h.remove();
    }
  }, 16);
}
