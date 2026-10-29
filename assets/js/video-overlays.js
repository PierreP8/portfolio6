/* Adds the green play treatment to compact YouTube reels. */
document.querySelectorAll('.reel, .video-container-916').forEach((container) => {
  if (!container.querySelector('iframe') || container.querySelector('.glass-overlay')) return;

  container.insertAdjacentHTML('beforeend', `
    <div class="glass-overlay" aria-hidden="true">
      <div class="custom-play-button">
        <svg viewBox="0 0 68 48" width="56" height="40" role="img">
          <path fill="#287c46" d="M66.52 7.74a8 8 0 0 0-5.64-5.66C55.9.75 36 0 36 0S16.1.75 11.12 2.08A8 8 0 0 0 5.48 7.74C4.15 12.72 4.15 24 4.15 24s0 11.28 1.33 16.26a8 8 0 0 0 5.64 5.66C16.1 47.25 36 48 36 48s19.9-.75 24.88-2.08a8 8 0 0 0 5.64-5.66C67.85 35.28 67.85 24 67.85 24s0-11.28-1.33-16.26a8 8 0 0 0-5.64-5.66Z"/>
          <path fill="#fff" d="m27 34 16-10-16-10z"/>
        </svg>
      </div>
    </div>`);
});
