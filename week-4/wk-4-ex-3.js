function headingChange(){
    var element = document.getElementById('main_heading');
    element.firstChild.nodeValue = 'JS HEADING'
}

document.addEventListener('DOMContentLoaded', headingChange)

