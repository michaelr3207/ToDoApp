import {createElement} from "../utils";


function createProjectCard(projectGrid,projectName, description, projectId){
    const projectCardElement = createElement('div', 'projectCard', projectId, '');
    const projectCardButtonDiv = createElement('div', 'projectButtonDiv', '', '');
    const closeButton = createElement('button', 'closeButton', '', 'X');
    const projectCardTitle = createElement('div', 'projectCardTitle', '', projectName);
    const projectCardDescription = createElement('button', 'toDoButton', '', 'Description');
    const showToDoButton = createElement('button', 'toDoButton', '', 'To Dos');
    projectCardButtonDiv.appendChild(closeButton);
    projectCardElement.appendChild(projectCardTitle);
    projectCardElement.appendChild(projectCardDescription);
    projectCardElement.appendChild(showToDoButton);
    projectCardElement.appendChild(projectCardButtonDiv);
    projectGrid.appendChild(projectCardElement);
}


export {createProjectCard};