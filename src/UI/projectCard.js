import {createElement} from "../utils";


function createProjectCard(projectGrid,projectName, description, projectId, toDoApp){
    const projectCardElement = createElement('div', 'projectCard', projectId + 'project', '');
    const projectCardButtonDiv = createElement('div', 'projectButtonDiv', '', '');
    const closeButton = createElement('button', 'closeButtonCard', projectId, 'X');
    const addButton = createElement('button', 'addButton', '', "+");
    const projectCardTitle = createElement('div', 'projectCardTitle', '', projectName);
    const projectCardDescription = createElement('button', 'toDoButton', '', 'Description');
    const showToDoButton = createElement('button', 'toDoButton', '', 'To Dos');
    console.log(`project card elem,ent id  -----> ${projectCardElement.id}`);
    projectCardButtonDiv.appendChild(addButton);
    projectCardButtonDiv.appendChild(closeButton);
    projectCardElement.appendChild(projectCardTitle);
    projectCardElement.appendChild(projectCardDescription);
    projectCardElement.appendChild(showToDoButton);
    projectCardElement.appendChild(projectCardButtonDiv);
    projectGrid.appendChild(projectCardElement);
    addEventListenerToProjectCardButtons(closeButton,toDoApp);
}


function addEventListenerToProjectCardButtons(closeButton, toDoApp){
    closeButton.addEventListener("click", (event) => {
        const projectGridDiv = document.getElementById('projectGridDiv');
        const cardToBeRemoved = document.getElementById(event.target.id + 'project');
        projectGridDiv.removeChild(cardToBeRemoved);
        console.log(event.target.id + '<-------------------');
        toDoApp.removeProjectById(event.target.id);
    })
}


export {createProjectCard};