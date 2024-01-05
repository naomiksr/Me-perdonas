var noButton = document.getElementById("noButton");
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var buttonWidth = noButton.offsetWidth;
var buttonHeight = noButton.offsetHeight;
var isMoving = false;

noButton.addEventListener("mouseenter", function() {
  moveButton();
});

function moveButton() {
  if (!isMoving) {
    var xPos = Math.random() * (windowWidth - buttonWidth);
    var yPos = Math.random() * (windowHeight - buttonHeight);

    noButton.style.top = yPos + "px";
    noButton.style.left = xPos + "px";

    isMoving = true;

    setTimeout(function() {
      isMoving = false;
    }, 1000);
  }
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

moveButton();
