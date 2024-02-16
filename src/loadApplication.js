import {
    addEventListenersToProjectCardAfterReload,
    addEventListenersToToDoObjectsAfterLocalStorageIsUsed,
    createElement,
    loadApp,
    saveApp,
    saveData,
    showTasks
} from "./utils";
import {addFirstRowToHeaderElement, addSecondRowToHeaderElement} from "./UI/header";
import {appendToDoList, createSideBarElement, createToDoElement} from "./UI/sidebar";
import {createProjectDisplayElement} from "./UI/projectDisplay";
import {createProjectCard} from "./UI/projectCard";
import {createToDoForm} from "./UI/toDoForm";
import {ToDoApp} from "./classes/ToDoApp";

function loadMainPage(){
    // localStorage.clear();
    reloadLocalStorage();
}

function reloadLocalStorage(){
    if(localStorage.getItem("toDoApp") != null){
        console.log('there is storage available neww!');
        let toDoApp = loadApp();
        console.log('there is storage available!');
        console.log(`at the start of the sace ----> ${toDoApp.appName}`)
        console.log('loading local storage....');
        showTasks();
        addEventListenersToToDoObjectsAfterLocalStorageIsUsed(toDoApp);
        addEventListenersToProjectCardAfterReload(toDoApp);

    }
    else{
        const toDoApp = new ToDoApp('Basic To Do App with no storage');
    }
}

function createHeaderAndSidebarElements(contentElement, toDoApp){
    const headerElement = createElement('div', 'headerDiv', 'header', '');
    addFirstRowToHeaderElement(headerElement);
    addSecondRowToHeaderElement(headerElement, toDoApp);
    contentElement.appendChild(headerElement);
    contentElement.appendChild(createSideBarElement());
}


export {reloadLocalStorage,loadMainPage, createHeaderAndSidebarElements};





