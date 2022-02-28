function headingChange(){
    var element1 = document.getElementById('main_heading');
    element1.firstChild.nodeValue = 'JS HEADING'

    var element2 = document.getElementById('paragraph');
    element2.firstChild.nodeValue = 'This is new updated paragragh. Thanks to JS. :)'
}

document.addEventListener('click', headingChange)

