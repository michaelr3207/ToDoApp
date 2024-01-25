import {createElement} from "../utils";
import AppLogo from '../images/check-outline.png';

function createSideBarElement(){
    const sideBarElement = createElement('div', 'sidebar', '', '');
    createSideBarLogoAndTitle(sideBarElement);
    createToDoContainer(sideBarElement);

    return sideBarElement;
}


function createSideBarLogoAndTitle(sidebarElement){
    const sideBarLogoAndTitle = createElement('div','sidebarLogoAndTitle', '', '' );
    const sidebarImageElement = createElement('div', 'sidebarDashImg', '', '');
    const appLogoImage = new Image();
    appLogoImage.src = AppLogo;
    sidebarImageElement.appendChild(appLogoImage);
    const dashTitleDiv = createElement('div', 'dashTitle', '', 'To Do App');
    sideBarLogoAndTitle.appendChild(sidebarImageElement);
    sideBarLogoAndTitle.appendChild(dashTitleDiv);
    sidebarElement.appendChild(sideBarLogoAndTitle);
}

function createToDoContainer(sidebarElement){
    const toDoListContainer = createElement('div', 'toDoListContainer', 'listContainer', '');
    // const toDoList = createElement('ul', 'toDoList', 'toDo', '');
    // const toDOExample = createElement('div', 'toDoDiv', '', 'Walk Dog');
    // toDoList.appendChild(toDOExample);
    // toDoListContainer.appendChild(toDoList);
    sidebarElement.appendChild(toDoListContainer);
}

function createToDoElement(description, id){
    const toDoElement = createElement('div', 'toDoElement', id, '');
    const deleteBtn = createElement('button', 'deleteBtn', 'deleteButton', 'X');
    const toDoTaskElement = createElement('div', 'toDoTask', '', description);
    const addBtn = createElement('button', 'addBtn', 'addButton', '+');
    toDoElement.appendChild(deleteBtn);
    toDoElement.appendChild(toDoTaskElement);
    toDoElement.appendChild(addBtn);
    console.log(toDoElement);
    return toDoElement;
}

function appendToDoList(task){
    const toDoList = document.getElementById('listContainer');
    toDoList.appendChild(task);
}
export {createSideBarElement, appendToDoList, createToDoElement};