var noButton = document.getElementById("noButton");
var buttonWidth = noButton.offsetWidth;
var buttonHeight = noButton.offsetHeight;

noButton.addEventListener("mouseenter", function() {
  moveButton();
});

function moveButton() {
  var windowWidth = window.innerWidth - buttonWidth;
  var windowHeight = window.innerHeight - buttonHeight;

  var xPos = Math.floor(Math.random() * windowWidth);
  var yPos = Math.floor(Math.random() * windowHeight);

  noButton.style.top = yPos + "px";
  noButton.style.left = xPos + "px";
}

document.addEventListener("mousemove", function(event) {
  var cursorX = event.clientX;
  var cursorY = event.clientY;
  var buttonRect = noButton.getBoundingClientRect();

  if (
    cursorX >= buttonRect.left &&
    cursorX <= buttonRect.right &&
    cursorY >= buttonRect.top &&
    cursorY <= buttonRect.bottom
  ) {
    moveButton();
  }
});
