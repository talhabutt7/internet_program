
function alertCircle(){
    var element = document.getElementById('circle');
    alert('Circle was clicked. Click OK below and circle color will change into Blue.');
    element.style.backgroundColor = 'blue';
}

function onLoad(){
    var element = document.getElementById('circle');
    element.addEventListener('click', alertCircle)
}

document.addEventListener('DOMContentLoaded', onLoad)




