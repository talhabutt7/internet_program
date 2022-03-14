function moveUp() {
    var element = document.getElementById('circle');
    var goTop = element.offsetTop;
    element.style.top = goTop - 1 + 'px';
   }
   
function moveDown() {
    var element = document.getElementById('circle');
    var goTop = element.offsetTop;
    element.style.top = goTop + 1 + 'px';
   }

function moveLeft() {
    var element = document.getElementById('circle');
    var goLeft = element.offsetLeft;
    element.style.left = goLeft - 1 + 'px';
   }

function moveRight() {
    var element = document.getElementById('circle');
    var goLeft = element.offsetLeft;
    element.style.left = goLeft + 1 + 'px';
   }

function downKey(event) {
    if (event.keyCode == 37) {
        setInterval(moveLeft, 10);
    }
    if (event.keyCode == 38) {
        setInterval(moveUp, 10);
    }
    if (event.keyCode == 40) {
        setInterval(moveDown, 10);
    }
    if (event.keyCode == 39) {
        setInterval(moveRight, 10);
    }
   }
   
function onLoad() {
    document.addEventListener('keydown', downKey);
   }
   
document.addEventListener('DOMContentLoaded', onLoad);