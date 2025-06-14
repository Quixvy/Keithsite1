document.querySelector('.js-next').addEventListener('click', function () {
  window.location.href = 'page3.html';
});

function playAudio() {
    document.getElementById("bg-music").play();
  }


  const audio = document.getElementById('audio');
  const playBtn = document.getElementById('playBtn');

  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = 'Pause'; // Pause icon
    } else {
      audio.pause();
      playBtn.textContent = 'Play'; // Play icon
    }
  }
