import {addEditWindowToToDo, appendToDoList, createToDoElement} from "./UI/sidebar";
import {Project} from "./classes/Project";
import {ToDoApp} from "./classes/ToDoApp";
import {addEventListenerToNavButtons} from "./UI/header";
import {takeAndSubmitDataFromProjectForm} from "./UI/projectForm";
import {
    displayOrHideProjectToDoList,
    displayProjectCardDescription,
    fillOrderedListWithToDoObjects
} from "./UI/projectCard";


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


function saveData(){
    const contentBox = document.getElementById('contentBox');
    const projectGrid = document.getElementById('projectGridDiv');
    localStorage.setItem("projects",  projectGrid.innerHTML);
    localStorage.setItem("content",  contentBox.innerHTML);
}

function saveNumberOfProjects(toDoApp){
    localStorage.setItem("projectId", Project.number.toString());
}

function saveApp(toDoApp){
    toDoApp.appName = `To Do App now saved`;
    localStorage.setItem("toDoApp", JSON.stringify(toDoApp));
}

function loadApp(){
    return JSON.parse(localStorage.getItem("toDoApp"));
}

function showTasks(toDoApp){
    const content = document.getElementById('contentBox');
    content.innerHTML = localStorage.getItem("content");
    Project.number = localStorage.getItem("projectId")
    // const projectGrid = document.getElementById('projectGridDiv');
    // projectGrid.innerHTML = localStorage.getItem("projects");
    // const toDoApp = localStorage.getItem("toDoApp");
}

function addEventListenersToProjectCardAfterReload(toDoApp){
    console.log('hellooooooooooooooooooooooooooooooooo')
    toDoApp.allProjects.forEach(item  => {
        console.log(`Project id!!! - ${item.projectId}`);
        const showDescriptionButton = document.getElementById(item.projectId + 'descriptionBtnProject');
        const closeButton = document.getElementById(item.projectId + 'closeBtnProject');
        closeButton.addEventListener("click", (event) => {
            const extractedId = extractNumberFromElementId(event.target.id);
            console.log(`Char at!!! - ${event.target.id.charAt(0)}`);
            console.log(`${extractedId} this is the current id ----------`)
            console.log('bro sdfksamfkms')
            const projectGridDiv = document.getElementById('projectGridDiv');
            const cardToBeRemoved = document.getElementById(Number.parseInt(extractedId) + 'project');
            projectGridDiv.removeChild(cardToBeRemoved);
            saveData();
            console.log(extractedId + '<------------------- here');
            removeProjectById(Number.parseInt(extractedId), toDoApp);
            saveApp(toDoApp);
        });
        showDescriptionButton.addEventListener("click", (event) => {
            displayProjectCardDescription(Number.parseInt(extractNumberFromElementId(event.target.id)));
        });
        const projectDescriptionElement = document.getElementById(item.projectId + 'projectDescription');
        const projectDescriptionCloseButton = document.getElementById(item.projectId + 'projectCloseBtnOnCard');
        projectDescriptionCloseButton.addEventListener("click", () => {
            projectDescriptionElement.className = 'hide';
        });
        addingEventListenerShowToDoButtonAfterReload(item, toDoApp);
    });
    const newProjectBtn = document.getElementById('newProjectBtn');
    const clearBtn = document.getElementById('clearAllButton');
    const newToDoBtn = document.getElementById('newToDoBtn');
    addEventListenerToNavButtonsAfterReload(newToDoBtn, newProjectBtn, clearBtn, toDoApp);
    addEventListenerToProjectFormButton(toDoApp);
}

function addingEventListenerShowToDoButtonAfterReload(item, toDoApp){
    const toDoListElement = document.getElementById( item.projectId + 'projectToDoList');
    const toDoListTitleElement = createElement('div', 'toDoListProjectTitleDiv', '', 'Current To Dos');
    const toDoListContainer = document.getElementById( item.projectId + 'toDoListContainer');
    const listElement = document.getElementById( 'orderedList' + item.projectId);
    const closeButton = document.getElementById(item.projectId + 'closeBtnToListDisplay');
    const showToDoButton = document.getElementById(item.projectId + 'showToDoBtnProject');
    showToDoButton.addEventListener("click", () => {
        fillOrderedListWithToDoObjects(toDoListContainer, listElement, toDoApp, item.projectId);
        displayOrHideProjectToDoList('display', item.projectId, toDoApp);
    });
    closeButton.addEventListener("click", () => {
        displayOrHideProjectToDoList('hide', item.projectId, toDoApp);
    });
}

function addEventListenerToNavButtonsAfterReload(newToDoBtn, newProjectBtn, clearBtn, toDoApp){
    newToDoBtn.addEventListener("click", () => displayToDoFormAfterReload());
    newProjectBtn.addEventListener("click", () => displayProjectFormAfter());
    clearBtn.addEventListener("click", () => console.log('this is the clear all butoon ----->'));
}

function displayToDoFormAfterReload(){
    const toDoForm = document.getElementById('toDoForm');
    toDoForm.className = 'toDoForm';
}


function displayProjectFormAfter(){
    const projectForm = document.getElementById('projectForm');
    projectForm.className = 'projectForm';
}


function extractNumberFromElementId(elementId){
    let result = '';
    for(let index = 0; index < elementId.length; index ++){
        if(!elementId[index].isNaN){
            console.log('letter:  ' + elementId[index] );
            result += elementId[index];
        }
    }
    return result;
}

function removeProjectById(id, toDoApp){
    console.log(id);
    console.log('All cards before new:  -----> ' + toDoApp.allProjects);
    for(let index = 0; index < toDoApp.allProjects.length; index ++){
        console.log(toDoApp.allProjects[index].projectId);
        if(toDoApp.allProjects[index].projectId === id){
            console.log('hsbfhsfbhsebfhsbefbhe');
            toDoApp.allProjects.splice(index, 1);
            toDoApp.noProjects --;
            saveData();
            saveApp(toDoApp);
        }
    }
}

function addEventListenerToProjectFormButton(toDoApp){
    const submitBtn = document.getElementById('submitBtn');
    const closeBtn = document.getElementById('closeBtnProjectForm');
    closeBtn.addEventListener("click", () => hideProjectForm());
    submitBtn.addEventListener("click", () => takeAndSubmitDataFromProjectForm(toDoApp));
}


function  hideProjectForm(){
    const projectForm = document.getElementById('projectForm');
    projectForm.className = 'hide';
}

export {hideProjectForm,removeProjectById, createElement, reloadSideBarToDoElements, showTasks, saveData, saveApp, addEventListenersToProjectCardAfterReload, loadApp, saveNumberOfProjects, extractNumberFromElementId};
