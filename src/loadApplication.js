import {createElement} from "./utils";
import {addFirstRowToHeaderElement, addSecondRowToHeaderElement} from "./header";
import {appendToDoList, createSideBarElement, createToDoElement} from "./sidebar";
import {createProjectDisplayElement} from "./projectDisplay";

function loadMainPage(){
    const contentElement = document.getElementById('contentBox');
    createHeaderAndSidebarElements(contentElement);    // appending these elements to DOM
    appendToDoList(createToDoElement('testst', '0'));
    appendToDoList(createToDoElement('walk dog', '0'));
    appendToDoList(createToDoElement('testst', '0'));
    createProjectDisplayElement();
}


function createHeaderAndSidebarElements(contentElement){
    const headerElement = createElement('div', 'headerDiv', 'header', '');
    addFirstRowToHeaderElement(headerElement);
    addSecondRowToHeaderElement(headerElement);
    contentElement.appendChild(headerElement);  // adding the header to the DOM
    contentElement.appendChild(createSideBarElement());
}


export {loadMainPage};





