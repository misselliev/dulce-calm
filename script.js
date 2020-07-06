const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 9000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In';
  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);