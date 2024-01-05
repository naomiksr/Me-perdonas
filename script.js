const LIMIT_X = 300;
const LIMIT_Y = 200;
window.addEventListener("load", ()=>{
  const btn = document.querySelector('.nobutton');
  
  btn.addEventListener('mouseover', moveButton);
  
  function moveButton(e){
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    let newX, newY;
    do {
      newX = Math.random() * LIMIT_X;
      newY = Math.random() * LIMIT_Y;
      
    } while(isMouseOverButton(mouseX, mouseY, newX, newY));
    btn.style.top= newY + "px";
    btn.style.left= newX + "px";
  }
  
  function isMouseOverButton(mX,mY, x, y) {
    const rect = btn.getBoundingClientRect();
    const conflict = (mX > x && mY < (x + rect.width) &&
        mY > y && mY < (y + rect.height));
    if (conflict)
    return conflict;
  }
});
