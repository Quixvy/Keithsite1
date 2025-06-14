let input = document.querySelector('.js-input');
let incorrect = document.querySelector('.incorrect')
function enterInput() {
  if (input.value === '052024') {
    window.location.href = 'page2.html';
  } else {
    incorrect.innerHTML = 'Incorrect'
  }
}


input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    enterInput();
  }
});