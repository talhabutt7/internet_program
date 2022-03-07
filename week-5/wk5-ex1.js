
function alertCircle(){
    var element = document.getElementById('circle');
    alert('Circle was clicked. Click OK below and circle color will change into Blue.');
    element.style.backgroundColor = 'blue';
    element.style.opacity = '1';
}

function onLoad(){
    var element = document.getElementById('circle');
    element.style.opacity = '0.5';
    element.addEventListener('click', alertCircle)
}

document.addEventListener('DOMContentLoaded', onLoad)




