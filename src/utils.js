

function createElement(elementType,classname, id,  innerHtml){
    const element = document.createElement('div');
    if(innerHtml !== '' || id !== ''){
        element.innerHTML = innerHtml;
        element.id = id;
    }
    element.classList.add(classname);
    return element;
}
