/* 
  pushing Like and Dislike on youtube
  1. open your favorite video on youtube.com
  2. enter script in browser's console
  3. enter  > push("like")
            > push("dislike")
*/

function push(myClick) {
  const main = document.querySelectorAll('#top-level-buttons-computed')[1];
  const btn = main.querySelectorAll('button');
  
  const likeBtn = btn[0];
  const disBtn = btn[1];
  
  // set bubbles:true - to click frome child node to parent node
  const click = new MouseEvent('click', { bubbles:true });

  if (myClick === "like") {
    likeBtn.dispatchEvent(click);
  }else if (myClick === "dislike") {
    disBtn.dispatchEvent(click);
  }
}