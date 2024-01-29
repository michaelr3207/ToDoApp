import {createElement} from "../utils";


function createProjectCard(projectGrid,projectName, description, projectId, toDoApp){
    const projectCardElement = createElement('div', 'projectCard', projectId + 'project', '');
    const projectCardButtonDiv = createElement('div', 'projectButtonDiv', '', '');
    const closeButton = createElement('button', 'closeButtonCard', projectId, 'X');
    const addButton = createElement('button', 'addButton', '', "+");
    const projectCardTitle = createElement('div', 'projectCardTitle', '', projectName);
    const projectCardDescription = createElement('button', 'toDoButton', projectId, 'Description');
    const showToDoButton = createElement('button', 'toDoButton', '', 'To Dos');
    console.log(`project card elem,ent id  -----> ${projectCardElement.id}`);
    projectCardButtonDiv.appendChild(addButton);
    projectCardButtonDiv.appendChild(closeButton);
    projectCardElement.appendChild(projectCardTitle);
    projectCardElement.appendChild(projectCardDescription);
    projectCardElement.appendChild(showToDoButton);
    projectCardElement.appendChild(projectCardButtonDiv);
    addDescriptionBoxToProjectCard(projectCardElement, description, projectId);
    projectGrid.appendChild(projectCardElement);
    addEventListenerToProjectCardButtons(closeButton, projectCardDescription, addButton, projectId,  toDoApp);
}


function addEventListenerToProjectCardButtons(closeButton, descriptionButton, addButton,  projectId,  toDoApp){
    closeButton.addEventListener("click", (event) => {
        const projectGridDiv = document.getElementById('projectGridDiv');
        const cardToBeRemoved = document.getElementById(event.target.id + 'project');
        projectGridDiv.removeChild(cardToBeRemoved);
        console.log(event.target.id + '<-------------------');
        toDoApp.removeProjectById(event.target.id);
    });
    descriptionButton.addEventListener("click", (e) => {
        displayProjectCardDescription(e.target.id);
    });
    addButton.addEventListener("click", () => {
        if(toDoApp.idOfCurrentSelectedToDo !== ''){
            const toDoListContainer = document.getElementById('listContainer');
            const toDoElement = document.getElementById(toDoApp.idOfCurrentSelectedToDo + 'toDo');
            toDoListContainer.removeChild(toDoElement);
            toDoApp.addToDoToProject(toDoApp.idOfCurrentSelectedToDo, projectId);
            toDoApp.defaultProject.removeToDoById(toDoApp.idOfCurrentSelectedToDo);
            console.log(`------------------->    --->  ${toDoApp.allProjects[0].toDos[0].description}`);
            toDoApp.idOfCurrentSelectedToDo = '';
        }
        else{
            alert('No To DO is Selected!');
        }
    });
}

function addDescriptionBoxToProjectCard(projectCardElement, description, projectId){
    const projectDescriptionElement = createElement('div', 'hide', projectId + 'projectDescription', description);
    const projectDescriptionCloseButton = createElement('div', 'descriptionCloseBtn', '', 'X');
    projectDescriptionCloseButton.addEventListener("click", () => {
        projectDescriptionElement.className = 'hide';
    })
    projectDescriptionElement.appendChild(projectDescriptionCloseButton);
    projectCardElement.appendChild(projectDescriptionElement);
}

function displayProjectCardDescription(id){
    const cardToBeDisplayed = document.getElementById(id + 'projectDescription');
    cardToBeDisplayed.className = 'projectDescriptionDiv';
}


export {createProjectCard};