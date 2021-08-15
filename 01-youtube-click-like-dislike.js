// pressing Like and Dislike on youtube

function press(myClick) {
  const main = document.querySelectorAll('#top-level-buttons-computed')[1];
  const btn = main.querySelectorAll('button');
  
  const likeBtn = btn[0];
  const disBtn = btn[1];
  
  const click = new MouseEvent('click', { bubbles:true });

  if (myClick === "like") {
    likeBtn.dispatchEvent(click);
  }else if (myClick === "dislike") {
    disBtn.dispatchEvent(click);
  }
}
