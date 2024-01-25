import {createElement} from "../utils";


function createProjectCard(projectGrid,projectName, description, projectId){
    const projectCardElement = createElement('div', 'projectCard', projectId, '');
    const projectCardTitle = createElement('div', 'projectCardTitle', '', projectName);
    const projectCardDescription = createElement('div', 'projectCardDescription', '', description);
    const showToDoButton = createElement('button', 'toDoButton', '', 'To Dos');
    projectCardElement.appendChild(projectCardTitle);
    projectCardElement.appendChild(projectCardDescription);
    projectCardElement.appendChild(showToDoButton);
    projectGrid.appendChild(projectCardElement);
}


export {createProjectCard};