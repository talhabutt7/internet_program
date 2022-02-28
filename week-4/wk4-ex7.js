function clickFunction(){
    var element = document.getElementById('input_f');
    alert(element.value)
}

function headingChange(){
    var element = document.getElementById('btn');
    element.addEventListener('click', clickFunction)
}

document.addEventListener('DOMContentLoaded', headingChange)