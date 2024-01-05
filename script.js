var noButton = document.getElementById("noButton");
var windowWidth = window.innerWidth - noButton.offsetWidth;
var windowHeight = window.innerHeight - noButton.offsetHeight;

noButton.addEventListener("mouseenter", function(event) {
  moveButton();
});

function moveButton() {
  var xPos = Math.floor(Math.random() * windowWidth);
  var yPos = Math.floor(Math.random() * windowHeight);

  noButton.style.top = yPos + "px";
  noButton.style.left = xPos + "px";

  requestAnimationFrame(moveButton);
}

document.addEventListener("DOMContentLoaded", function(event) {
  moveButton();
});
