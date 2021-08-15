/* 
  auto click 1 to 50
  https://zzzscore.com/1to50/en/
  1. enter script in browser's console to play the game
  2. enter script again to back to first
*/

const retry = document.querySelector('.retry');
const reset = document.querySelector('.resetBtn');
const scoreText = document.querySelector('#score');
const click = new MouseEvent('click', { bubbles:true });

// initial setup
const delay = 110; // delay between 1st and 2nd round
let myLevel = 1; // 
let myScore = (scoreText)? +scoreText.textContent : 0;

// retry - when in a result page
if (retry) {
  retry.dispatchEvent(click);
  console.log("retry...");
} 
// restart - when the game has already started
else if (reset && myLevel !== myScore) {
  reset.dispatchEvent(click);
  console.log("reset...");
}

// can not run 1 to 50 at once
// 1st round - run 1 to 25
autoClick();
// 2nd round - run 26 to 50
setTimeout(() => {
  autoClick();
  console.log("done...");
}, delay);

// click boxes
function autoClick() {
  const boxes = document.querySelectorAll('.box');
  const touchstart = new TouchEvent('touchstart');
  const touchend = new TouchEvent('touchend');
  
  // click a box
  function clickBox() {
    boxes.forEach(box => {
      const number = +box.nextSibling.textContent;
      if (number === myLevel) {
        box.parentNode.dispatchEvent(touchstart);
        box.parentNode.dispatchEvent(touchend);
        myLevel++;
      };
    });
  }
  
  // set a round number
  const round = 25;

  for (let i = 0; i < round; i++) {
    clickBox();
  }
}

// inspired by techCast
// https://www.youtube.com/watch?v=O7nffbd6gqE&t=2s&ab_channel=Techcast