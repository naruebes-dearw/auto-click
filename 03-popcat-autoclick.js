/* 
  popcat auto click
  1. open website https://popcat.click/
  2. enter script in browser's console
  3. click on "POPCAT" text to run and stop

  script run 1000 click per 30 seconds
  ( API rate limit per IP address = 800 clicks per 30 seconds )
*/

const keyDown = new KeyboardEvent('keydown', { key:'t' });
const keyup = new KeyboardEvent('keyup', { key:'t' });

// initial setup
let run = '';
let status = false;

// clear bot status
document.cookie.split(';').map(cookie => {
  const isBot = cookie.match(/bot=.+/g);
  if ( isBot ) {
    document.cookie = 'bot='; // clear bot status
    console.log('clear bot and refresh.');
    location.reload(); // refresh website
  }
})

// click on the text "POPCAT" to run and stop.
document.addEventListener('click', () => {
  status = status? false: true; // toggle status
  status? start() : stop();
});

// start
function start() {
  console.log('%c started... ', 'color:	#1a73e8; background:white')
  run = setInterval((e) => {
    document.dispatchEvent(keyDown);
    document.dispatchEvent(keyup);
  }, 30); // click every 30 ms
}

// stop
function stop() {
  clearInterval(run); // stop running
  console.log('%c stop ', 'color:red; background:white');
  // document.cookie = 'pop_count=0'; // reset count
}

console.log('%c   Click on "POPCAT" text to run and stop.   ', 'color:green; background:white')