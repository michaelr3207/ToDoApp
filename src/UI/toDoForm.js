import {createElement, displayToDoForm, hideToDoForm} from "../utils";
import {appendToDoList, createToDoElement} from "./sidebar";
import {ToDoTask} from "../classes/ToDo";


function createToDoForm(toDoApp){
    const contentElement = document.getElementById('contentBox');
    const formElement = createElement('div', 'hide', 'toDoForm', '');
    const toDoNameInput = createElement('input', 'toDoFormElement', 'toDoName', '');
    toDoNameInput.placeholder = 'Name of to do';  toDoNameInput.type = 'text';
    const toDoDescriptionInput = createElement('input', 'toDoFormElement', 'toDoDescription', '');
    toDoDescriptionInput.placeholder = 'Description';    toDoDescriptionInput.type = 'text';
    const toDoDueDateInput = createElement('input', 'toDoFormElement', 'toDoDate', '');
    toDoDueDateInput.placeholder = 'Name of to do';  toDoDueDateInput.type = 'text';
    const submitButton = createElement('button', 'submitButton', '', 'SUBMIT');
    submitButton.addEventListener("click", () => takeAndSubmitDataFromToDoForm(toDoApp));
    const closeButton = createElement('button', 'closeButton', '', 'CLOSE');
    closeButton.addEventListener("click", () => toDoApp.hideToDoForm());
    formElement.appendChild(toDoNameInput);
    formElement.appendChild(toDoDescriptionInput);
    formElement.appendChild(toDoDueDateInput);
    formElement.appendChild(submitButton);
    formElement.appendChild(closeButton);
    contentElement.appendChild(formElement);
}


function takeAndSubmitDataFromToDoForm(toDoApp){
    const toDoName = document.getElementById('toDoName').value;
    const toDoDescription = document.getElementById('toDoDescription').value;
    const toDoDate = document.getElementById('toDoDate').value;
    createToDoObjectAndAddToUi(toDoName, toDoDescription, toDoDate, toDoApp);
}

function createToDoObjectAndAddToUi(toDoName, toDoDescription, toDoDate, toDoApp){
    let toDoTask = new ToDoTask(toDoName, toDoDescription, toDoDate);
    appendToDoList(createToDoElement(toDoDescription, toDoTask.getId(), toDoApp));
    toDoApp.defaultProject.addToDoTask(toDoTask);
    console.log(`to do id -----------> ${toDoTask.name}`);
    console.log(`to do all tasks -----------> ${toDoApp.defaultProject.getAllToDos()}`);

}




export {createToDoForm};