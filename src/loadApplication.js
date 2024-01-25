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
    const contentElement = document.getElementById('contentBox');
    createHeaderAndSidebarElements(contentElement, toDoApp);    // appending these elements to DOM
    appendToDoList(createToDoElement('testst', '0'));
    appendToDoList(createToDoElement('walk dog', '0'));
    appendToDoList(createToDoElement('testst', '0'));
    createProjectDisplayElement();
    const projectGridElement = document.getElementById('projectGridDiv');
    const zero = 0;
    createProjectCard(projectGridElement, 'Example',
        'Test project description, this means absolutely nothing',
        zero.toString());
    createProjectCard(projectGridElement, 'Example',
        'Test project description, this means absolutely nothing',
        zero.toString());
    createProjectCard(projectGridElement, 'Example',
        'Test project description, this means absolutely nothing',
        zero.toString());
    createProjectCard(projectGridElement, 'Example',
        'Test project description, this means absolutely nothing',
        zero.toString());
    createProjectCard(projectGridElement, 'Example',
        'Test project description, this means absolutely nothing',
        zero.toString());
    createProjectCard(projectGridElement, 'Example',
        'Test project description, this means absolutely nothing',
        zero.toString());

    main();
    // createToDoForm();
}


function createHeaderAndSidebarElements(contentElement, toDoApp){
    const headerElement = createElement('div', 'headerDiv', 'header', '');
    addFirstRowToHeaderElement(headerElement);
    addSecondRowToHeaderElement(headerElement, toDoApp);
    contentElement.appendChild(headerElement);  // adding the header to the DOM
    contentElement.appendChild(createSideBarElement());
}


export {loadMainPage};





