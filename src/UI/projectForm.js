import {createElement, hideProjectForm, saveApp, saveData, saveNumberOfProjects} from "../utils";
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
    const submitButton = createElement('button', 'submitButton', 'submitBtn', 'SUBMIT');
    submitButton.addEventListener("click", () => takeAndSubmitDataFromProjectForm(toDoApp));
    const closeButton = createElement('button', 'closeButton', 'closeBtnProjectForm', 'CLOSE');
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
    console.log(`this is the name --------> ${toDoApp.appName}`);
    const projectGrid = document.getElementById('projectGridDiv');
    if(toDoApp.noProjects <= 12){
        console.log('mrmfesoemefsfddddddddd');
        toDoApp.allProjects.push(newProject);
        toDoApp.noProjects ++;
        saveNumberOfProjects(toDoApp);
        createProjectCard(projectGrid, projectName, projectDescription, newProject.projectId, toDoApp);
        console.log(`to do all projects -----------> ${toDoApp.allProjects}`);
        console.log(`new project ID -----------> ${newProject.projectId}`);
        hideProjectForm();
        saveData();
        saveApp(toDoApp);
    }
    else
        alert(`ERROR: Max number of projects is reached!`);
}

export {createProjectForm, takeAndSubmitDataFromProjectForm};