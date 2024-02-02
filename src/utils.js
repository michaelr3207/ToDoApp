import {addEditWindowToToDo, appendToDoList, createToDoElement} from "./UI/sidebar";


function createElement(elementType,classname, id,  innerHtml){
    const element = document.createElement(elementType);
    if(innerHtml !== '' || id !== ''){
        element.innerHTML = innerHtml;
        element.id = id;
    }
    element.classList.add(classname);
    return element;
}

function reloadSideBarToDoElements(toDoApp){
    const toDoList = document.getElementById('listContainer');
    toDoList.innerHTML = '';
    toDoApp.defaultProject.toDos.forEach(item => {
        const toDoElement = createToDoElement(item.name, item.id, toDoApp);
        appendToDoList(toDoElement);
        addEditWindowToToDo(toDoElement, item.id, toDoApp);
    });
}




export {createElement, reloadSideBarToDoElements};
