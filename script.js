const LIMIT_X = 500;
const LIMIT_Y = 500;
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

function mostrarMensaje() {
    Swal.fire({
  title: "Te amo, ¡Gracias por perdonarme!",
  text: "Te quiero mucho mi vida",
  confirmButtonText: "Yo también",
  imageUrl: "https://stickershop.line-scdn.net/stickershop/v1/product/7067/LINEStorePC/main.png?v=1",
  imageWidth: 300,
  imageHeight: 300,
  imageAlt: "Corazón"
});
}