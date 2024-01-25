

function createElement(elementType,classname, id,  innerHtml){
    const element = document.createElement(elementType);
    if(innerHtml !== '' || id !== ''){
        element.innerHTML = innerHtml;
        element.id = id;
    }
    element.classList.add(classname);
    return element;
}


function displayToDoForm(){
    const toDoForm = document.getElementById('toDoForm');
    toDoForm.className = 'toDoForm';
}

function hideToDoForm(){
    const toDoForm = document.getElementById('toDoForm');
    toDoForm.className = 'hide';
}


export {createElement, displayToDoForm, hideToDoForm};
