import {createElement} from "../utils";
import {ToDoTask} from "../classes/ToDo";
import {appendToDoList, createToDoElement} from "./sidebar";
import {Project} from "../classes/Project";
import {createProjectCard} from "./projectCard";


function createProjectForm(toDoApp){
    const contentElement = document.getElementById('contentBox');
    const formElement = createElement('div', 'hide', 'projectForm', '');
    const projectNameInput = createElement('input', 'projectFormElement', 'projectName', '');
    projectNameInput.placeholder = 'Name of project';  projectNameInput.type = 'text';
    const projectDescriptionInput = createElement('input', 'projectFormElement', 'projectDescription', '');
    projectDescriptionInput.placeholder = 'Description';    projectDescriptionInput.type = 'text';
    const submitButton = createElement('button', 'submitButton', '', 'SUBMIT');
    submitButton.addEventListener("click", () => takeAndSubmitDataFromProjectForm(toDoApp));
    const closeButton = createElement('button', 'closeButton', '', 'CLOSE');
    closeButton.addEventListener("click", () => toDoApp.hideProjectForm());
    formElement.appendChild(projectNameInput);
    formElement.appendChild(projectDescriptionInput);
    formElement.appendChild(submitButton);
    formElement.appendChild(closeButton);
    contentElement.appendChild(formElement);
}

function takeAndSubmitDataFromProjectForm(toDoApp){
    const projectName = document.getElementById('projectName').value;
    const projectDescription = document.getElementById('projectDescription').value;
    createProjectObjectAndAddToUi(projectName, projectDescription, toDoApp);
}


function createProjectObjectAndAddToUi(projectName, projectDescription,  toDoApp){
    let newProject = new Project(projectName, projectDescription);
    const projectGrid = document.getElementById('projectGridDiv');
    toDoApp.addProject(newProject);
    createProjectCard(projectGrid,projectName, projectDescription, newProject.id);
    console.log(`to do all projects -----------> ${toDoApp.getAllProjects()}`);
    console.log(`new project ID -----------> ${newProject.id}`);
}

export {createProjectForm};