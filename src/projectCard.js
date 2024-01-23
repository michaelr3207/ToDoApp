import {createElement} from "./utils";


function createProjectCard(,projectName, description, projectId){
    const projectCardElement = createElement('div', 'projectCard', projectId, '');
    const projectCardTitle = createElement('div', 'projectCardTitle', '', projectName);
    const projectCardDescription = createElement('div', 'projectCardDescription', '', description);
    const showToDoButton = createElement('div', 'toDoButton', '', 'To Dos');

}