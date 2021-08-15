const retry = document.querySelector('.retry');
const reset = document.querySelector('.resetBtn');
const scoreText = document.querySelector('#score');
const click = new MouseEvent('click', { bubbles:true });

const delay = 110;
let myLevel = 1;
let myScore = (scoreText)? +scoreText.textContent : 0;

// retry
if (retry) {
  retry.dispatchEvent(click);
  console.log("retry...");
} 
// restart
else if (reset && myLevel !== myScore) {
  reset.dispatchEvent(click);
  console.log("reset...");
}

// can not run 1 to 50 at once
// run 1 to 25
autoClick();
// run 26 to 50
setTimeout(() => {
  autoClick();
  console.log("done...");
}, delay);

function autoClick() {
  const boxs = document.querySelectorAll('.box');
  const touchstart = new TouchEvent('touchstart');
  const touchend = new TouchEvent('touchend');
  
  function clickBox() {
    boxs.forEach(box => {
      const number = +box.nextSibling.textContent;
      if (number === myLevel) {
        box.parentNode.dispatchEvent(touchstart);
        box.parentNode.dispatchEvent(touchend);
        myLevel++;
      };
    });
  }
  
  const round = 25;
  
  for (let i = 0; i < round; i++) {
    clickBox();
  }
}