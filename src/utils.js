import {addEditWindowToToDo, appendToDoList, createToDoElement} from "./UI/sidebar";
import {Project} from "./classes/Project";
import {ToDoApp} from "./classes/ToDoApp";


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
    const projectGrid = document.getElementById('projectGridDiv');
    localStorage.setItem("projects",  projectGrid.innerHTML);
}

function saveNumberOfProjects(toDoApp){
    localStorage.setItem("projectId", Project.number.toString());
}

function saveApp(toDoApp){
    localStorage.setItem("toDoApp", JSON.stringify(toDoApp));
}

function loadApp(){
    return JSON.parse(localStorage.getItem("toDoApp"));
}

function showTasks(toDoApp){
    Project.number = localStorage.getItem("projectId")
    const projectGrid = document.getElementById('projectGridDiv');
    projectGrid.innerHTML = localStorage.getItem("projects");
    // const toDoApp = localStorage.getItem("toDoApp");
}

function addEventListenersToProjectCardAfterReload(toDoApp){
    console.log('hellooooooooooooooooooooooooooooooooo')
    toDoApp.allProjects.forEach(item  => {
        console.log(`Project id!!! - ${item.projectId}`);
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
    });
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
        }
    }
}

export {removeProjectById, createElement, reloadSideBarToDoElements, showTasks, saveData, saveApp, addEventListenersToProjectCardAfterReload, loadApp, saveNumberOfProjects, extractNumberFromElementId};
