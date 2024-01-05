var button = document.getElementById("button");
var buttonWidth = button.offsetWidth;
var buttonHeight = button.offsetHeight;
var windowWidth = window.innerWidth - buttonWidth;
var windowHeight = window.innerHeight - buttonHeight;

button.addEventListener("mouseenter", function(event) {
  moveButton();
});

function moveButton() {
  var xPos = Math.floor(Math.random() * windowWidth);
  var yPos = Math.floor(Math.random() * windowHeight);

  button.style.top = yPos + "px";
  button.style.left = xPos + "px";
}

document.addEventListener("mousemove", function(event) {
  var cursorX = event.clientX;
  var cursorY = event.clientY;
  var buttonRect = button.getBoundingClientRect();

  if (
    cursorX >= buttonRect.left &&
    cursorX <= buttonRect.right &&
    cursorY >= buttonRect.top &&
    cursorY <= buttonRect.bottom
  ) {
    moveButton();
  }
});
