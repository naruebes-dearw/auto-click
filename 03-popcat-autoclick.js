const mouseDown = new KeyboardEvent('keydown', { key:'t' });
const mouseUp = new KeyboardEvent('keyup', { key:'t' });

let run = '';
let status = false;

// stop - click on the text "POPCAT" to stop
document.addEventListener('click', () => {
  status = status? false: true;
  if (status) {
    console.log('%c started... ', 'color:	#1a73e8; background:white')
    run = setInterval((e) => {
      document.dispatchEvent(mouseDown);
      document.dispatchEvent(mouseUp);
    }, 30);
  } else {
    clearInterval(run);
    console.log('%c stop ', 'color:red; background:white');
    document.cookie = 'pop_count=0';
  }
});

console.log('%c   Click on "POPCAT" text to run and stop.   ', 'color:green; background:white')