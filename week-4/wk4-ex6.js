function clickFunction(){
    var element = document.getElementById('main_heading');
    element.firstChild.nodeValue = 'JS HEADING'
}

function clickparaFunction(){
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'This is new updated paragragh. Thanks to JS. :)'
}

function headingChange(){
    var element = document.getElementById('main_heading');
    element.addEventListener('click', clickFunction)
    var element = document.getElementById('paragraph');
    element.addEventListener('click', clickparaFunction)
}


document.addEventListener('DOMContentLoaded', headingChange)