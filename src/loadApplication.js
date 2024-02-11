import {addEventListenersToProjectCardAfterReload, createElement, loadApp, saveApp, saveData, showTasks} from "./utils";
import {addFirstRowToHeaderElement, addSecondRowToHeaderElement} from "./UI/header";
import {appendToDoList, createSideBarElement, createToDoElement} from "./UI/sidebar";
import {createProjectDisplayElement} from "./UI/projectDisplay";
import {createProjectCard} from "./UI/projectCard";
import {main} from "./mainApp";
import {createToDoForm} from "./UI/toDoForm";
import {ToDoApp} from "./classes/ToDoApp";

function loadMainPage(){
    // localStorage.clear();
    // showTasks();
    // addEventListenersToProjectCardAfterReload(toDoApp);
    // // toDoApp = loadApp();

    reloadLocalStorage();

    // const projectGridElement = document.getElementById('projectGridDiv');
    // main();
    // createToDoForm();
}

function reloadLocalStorage(){
    if(localStorage.getItem("toDoApp") != null){
        console.log('there is storage available neww!');
        // saveData();
        let toDoApp = loadApp();
        // saveData();
        // saveApp(toDoApp);
        console.log('there is storage available!');
        // toDoApp = loadApp();
        console.log(`at the start of the sace ----> ${toDoApp.appName}`)
        // saveApp(toDoApp);
        if(toDoApp.noProjects > 0){
            console.log('ddddddddddthere is storage available!');
            showTasks();
            addEventListenersToProjectCardAfterReload(toDoApp);
        }
    }
    else{
        const toDoApp = new ToDoApp('Basic To Do App with no storage');
    }
}

function createHeaderAndSidebarElements(contentElement, toDoApp){
    const headerElement = createElement('div', 'headerDiv', 'header', '');
    addFirstRowToHeaderElement(headerElement);
    addSecondRowToHeaderElement(headerElement, toDoApp);
    contentElement.appendChild(headerElement);  // adding the header to the DOM
    contentElement.appendChild(createSideBarElement());
}


export {reloadLocalStorage,loadMainPage, createHeaderAndSidebarElements};





