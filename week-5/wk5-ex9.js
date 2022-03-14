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

var interval = 0;
function downKey(event) {
    clearInterval(interval);
    if (event.keyCode == 37) {
        interval = setInterval(moveLeft, 10);
    }
    if (event.keyCode == 38) {
        interval =setInterval(moveUp, 10);
    }
    if (event.keyCode == 40) {
        interval =setInterval(moveDown, 10);
    }
    if (event.keyCode == 39) {
        interval =setInterval(moveRight, 10);
    }
   }
   
   
function onLoad() {
    document.addEventListener('keydown', downKey);
   }
   
document.addEventListener('DOMContentLoaded', onLoad);