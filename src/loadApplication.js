import {createElement} from "./utils";
import {addFirstRowToHeaderElement, addSecondRowToHeaderElement} from "./UI/header";
import {appendToDoList, createSideBarElement, createToDoElement} from "./UI/sidebar";
import {createProjectDisplayElement} from "./UI/projectDisplay";
import {createProjectCard} from "./UI/projectCard";
import {main} from "./mainApp";
import {createToDoForm} from "./UI/toDoForm";
import {ToDoApp} from "./classes/ToDoApp";

function loadMainPage(){
    const toDoApp = new ToDoApp('Basic To Do App');
    // const projectGridElement = document.getElementById('projectGridDiv');
    // main();
    // createToDoForm();
}


function createHeaderAndSidebarElements(contentElement, toDoApp){
    const headerElement = createElement('div', 'headerDiv', 'header', '');
    addFirstRowToHeaderElement(headerElement);
    addSecondRowToHeaderElement(headerElement, toDoApp);
    contentElement.appendChild(headerElement);  // adding the header to the DOM
    contentElement.appendChild(createSideBarElement());
}


export {loadMainPage, createHeaderAndSidebarElements};





