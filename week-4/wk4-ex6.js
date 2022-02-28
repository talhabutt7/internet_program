function clickFunction(){
    var element = document.getElementById('main_heading');
    element.firstChild.nodeValue = 'JS HEADING'
}

function clickparaFunction(){
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'This is new updated paragragh. Thanks to JS. :)'
}

function oldFunction(){
    var element = document.getElementById('main_heading');
    element.firstChild.nodeValue = 'Page Heading'
}

function oldparaFunction(){
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'This is old hard coded paragraph. Please change me!'
}

function headingChange(){
    var element = document.getElementById('main_heading');
    element.addEventListener('mouseenter', clickFunction)
    var element = document.getElementById('paragraph');
    element.addEventListener('mouseenter', clickparaFunction)

    var element = document.getElementById('main_heading');
    element.addEventListener('mouseout', oldFunction)
    var element = document.getElementById('paragraph');
    element.addEventListener('mouseout', oldparaFunction)
}


document.addEventListener('DOMContentLoaded', headingChange)