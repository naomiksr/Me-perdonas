var button = document.getElementById("button");
var buttonWidth = button.offsetWidth;
var buttonHeight = button.offsetHeight;
var windowWidth = window.innerWidth - buttonWidth;
var windowHeight = window.innerHeight - buttonHeight;
var isMoving = false;

button.addEventListener("mouseenter", function(event) {
  moveButton();
});

function moveButton() {
  if (!isMoving) {
    var xPos = Math.floor(Math.random() * windowWidth);
    var yPos = Math.floor(Math.random() * windowHeight);

    button.style.top = yPos + "px";
    button.style.left = xPos + "px";

    isMoving = true;

    setTimeout(function() {
      isMoving = false;
    }, 1000); // Detener el movimiento después de 1 segundo
  }
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
