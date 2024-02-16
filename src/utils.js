import {addEditWindowToToDo, appendToDoList, createToDoElement} from "./UI/sidebar";
import {Project} from "./classes/Project";
import {ToDoApp} from "./classes/ToDoApp";
import {addEventListenerToNavButtons} from "./UI/header";
import {takeAndSubmitDataFromProjectForm} from "./UI/projectForm";
import {
    displayOrHideProjectToDoList,
    displayProjectCardDescription,
    fillOrderedListWithToDoObjects, reloadListAfterDeletion
} from "./UI/projectCard";
import {hideToDoFormNew, takeAndSubmitDataFromToDoForm} from "./UI/toDoForm";
import {reloadLocalStorage} from "./loadApplication";
import {ToDoTask} from "./classes/ToDo";


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

function saveNumberOfToDo(toDoApp){
    console.log(`this is the current number of the static to do tasl ${ToDoTask.number}`);
    localStorage.setItem("toDoId", ToDoTask.number.toString());
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
    ToDoTask.number = localStorage.getItem("toDoId");
}

function addEventListenersToProjectCardAfterReload(toDoApp){
    toDoApp.allProjects.forEach(item  => {
        console.log(`Project id!!! - ${item.projectId}`);
        const showToDoListButton = document.getElementById(item.projectId + 'showToDoBtnProject');
        addEventListenerToShowToDoListDisplayForSpecificProject(showToDoListButton, item, toDoApp);
        const showDescriptionButton = document.getElementById(item.projectId + 'descriptionBtnProject');
        const closeButton = document.getElementById(item.projectId + 'closeBtnProject');
        closeButton.addEventListener("click", (event) => {
            const extractedId = extractNumberFromElementId(event.target.id);
            console.log(`${extractedId} this is the current id ----------`)
            const projectGridDiv = document.getElementById('projectGridDiv');
            const cardToBeRemoved = document.getElementById(Number.parseInt(extractedId) + 'project');
            projectGridDiv.removeChild(cardToBeRemoved);
            saveData();
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

function addEventListenerToShowToDoListDisplayForSpecificProject(showToDoBtn, itemProject, toDoApp) {
    const listContainer = document.getElementById(itemProject.projectId + 'toDoListContainer');
    const fetchedListElement = document.getElementById('orderedList' + itemProject.projectId);
    if(fetchedListElement !== null){
        listContainer.removeChild(fetchedListElement);
    }
    const listElement = createElement('div', 'projectOrderedListDiv', 'orderedList' + itemProject.projectId, '');
    showToDoBtn.addEventListener("click", () => {
        reloadListAfterDeletion(itemProject.projectId, toDoApp);
        displayOrHideProjectToDoList('display', itemProject.projectId, toDoApp);
    });

}


function addEventListerToAddToDoForm(toDoApp){
    const submitButton = document.getElementById('submitBtnToDo');
    submitButton.addEventListener("click", () => takeAndSubmitDataFromToDoForm(toDoApp));
    const closeButton = document.getElementById('closeBtnToDo');
    closeButton.addEventListener("click", () => hideToDoFormNew());
}

function addEventListenersToToDoObjectsAfterLocalStorageIsUsed(toDoApp) {
    addEventListerToAddToDoForm(toDoApp);
    toDoApp.defaultProject.toDos.forEach(item => {
        const deleteBtn = document.getElementById(`${item.id}deleteBtnToDoElement`);
        const expandBtn = document.getElementById(`${item.id}expandBtnToDoElement`);
        const addBtn = document.getElementById(`${item.id}addBtnToDoElement`);
        addEventListenerToToDOElementButtons(item.id, deleteBtn, addBtn, expandBtn, toDoApp);
        addEventListenerToDoEditWindow(item.id, toDoApp);
    });
}

function getProjectToDoById(project, id){
        for(let item of project.toDos){
        if(item.id.toString() === id.toString())
            return item;
    }

}

function addingEventListenerShowToDoButtonAfterReload(item, toDoApp){
    const addButton = document.getElementById(item.projectId + 'addBtnProject');
    const closeButton = document.getElementById(item.projectId + 'closeBtnToListDisplay');
    closeButton.addEventListener("click", () => {
        displayOrHideProjectToDoList('hide', item.projectId, toDoApp);
    });
    addButton.addEventListener("click", () => {
        if(toDoApp.idOfCurrentSelectedToDo !== ''){
            const toDoListContainer = document.getElementById('listContainer');
            const toDoElement = document.getElementById(toDoApp.idOfCurrentSelectedToDo + 'toDo');
            toDoListContainer.removeChild(toDoElement);
           checkIfToDoCanBeAdded(item.projectId, toDoApp.idOfCurrentSelectedToDo, toDoApp);
            removeToDoById(toDoApp.defaultProject, toDoApp.idOfCurrentSelectedToDo);
            toDoApp.defaultProject.noOfToDos --;
            console.log(`------------------->    --->  ${toDoApp.allProjects[0].toDos[0].description}`);
            toDoApp.idOfCurrentSelectedToDo = '';
            saveData();
            saveApp(toDoApp);
        }
        else{
            alert('No To DO is Selected!');
        }
    });
}

function getToDoById(project, id){
    let result;
    console.log('dnfdnhbgdbhbdrf ------>');
    project.toDos.forEach(item => {
       if(item.id.toString() === id.toString())
           result = item;
    });
    return result;
}

function checkIfToDoCanBeAdded(projectId, toDoId, toDoApp){
    const toDo = getToDoById(toDoApp.defaultProject, toDoId);
    console.log('dnfdnhbgdbhbdrf');
    for(let item of toDoApp.allProjects){
        if(item.projectId.toString() === projectId.toString()){
            addToDoToProject(item, toDo);
        }
    }
}

function addToDoToProject(project, toDo){
    project.toDos.push(toDo);
    project.noOfToDos ++;
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

function getProjectById(id, toDoApp){
    for(let index = 0; index < toDoApp.allProjects.length; index ++){
        console.log(toDoApp.allProjects[index].projectId);
        if(toDoApp.allProjects[index].projectId === id){
            return toDoApp.allProjects[index];
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

function removeToDoById(project, id){
    console.log('All toDos before:  -----> ' + project.toDos);
    for(let index = 0; index < project.toDos.length; index ++){
        if(project.toDos[index].id.toString() === id.toString()){
            console.log('match');
            project.toDos.splice(index, 1);
        }
    }
    console.log('All toDos after:  -----> ' + project.toDos);
}

function addEventListenerToToDOElementButtons(id, deleteBtn, addBtn, expandBtn, toDoApp){
    deleteBtn.addEventListener("click", (e) => {
        const toDoListContainer = document.getElementById('listContainer');
        const toDoElement = document.getElementById(Number.parseInt(extractNumberFromElementId(e.target.id)) + 'toDo');
        toDoListContainer.removeChild(toDoElement);
        removeToDoById(toDoApp.defaultProject, Number.parseInt(extractNumberFromElementId(e.target.id)));
        toDoApp.defaultProject.noOfToDos --;
        saveData();
        saveApp(toDoApp);
        reloadLocalStorage();
    });

    addBtn.addEventListener("click", () => {
        toDoApp.idOfCurrentSelectedToDo = id;
    });

    expandBtn.addEventListener("click", () => {
        const toDoElement = document.getElementById(id + 'toDo');
        toDoElement.style.textDecoration = 'underline';
        const sideBarExpansionElement = document.getElementById(id + 'expansionDivSidebar');
        sideBarExpansionElement.className = 'toDoExpansionSidebar';
    });
}

function addEventListenerToDoEditWindow(id, toDoApp){
    const expansionWindow = document.getElementById(id + 'expansionDivSidebar',);
    const nameBox = document.getElementById(id + 'nameExpansionSidebar');
    const dateBox = document.getElementById(id + 'dateExpansionSidebar');
    const descriptionBox = document.getElementById(id + 'descriptionExpansionSidebar');
    const saveButton = document.getElementById(id + 'saveButtonToDoProjectSidebar');
    saveButton.addEventListener("click", () => {
        const  updatedName = nameBox.value;
        const updatedDescription = descriptionBox.value;
        const updatedDate = dateBox.value;
        getProjectToDoById(toDoApp.defaultProject, id).name = updatedName;
        getProjectToDoById(toDoApp.defaultProject, id).description = updatedDescription;
        getProjectToDoById(toDoApp.defaultProject, id).dueDate = updatedDate;
        expansionWindow.className = 'hide';
        reloadSideBarToDoElements(toDoApp);
        saveData();
        saveApp(toDoApp);
        reloadLocalStorage();
    });

}

export {saveNumberOfToDo, removeToDoById, getProjectToDoById, addEventListenersToToDoObjectsAfterLocalStorageIsUsed,getProjectById, hideProjectForm,removeProjectById, createElement, reloadSideBarToDoElements, showTasks, saveData, saveApp, addEventListenersToProjectCardAfterReload, loadApp, saveNumberOfProjects, extractNumberFromElementId};
