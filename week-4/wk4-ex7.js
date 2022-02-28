function clickFunction(){
    var element = document.getElementById('input');
    var div = document.getElementById('text');
    div.firstChild.nodeValue = element.value;
}

function headingChange(){
    var element = document.getElementById('input');
    element.addEventListener('keyup', clickFunction)
}

document.addEventListener('DOMContentLoaded', headingChange)