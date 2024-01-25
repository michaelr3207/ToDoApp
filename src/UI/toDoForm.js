import {createElement, displayToDoForm, hideToDoForm} from "../utils";
import {appendToDoList, createToDoElement} from "./sidebar";
import {ToDoTask} from "../classes/ToDo";


function createToDoForm(toDoForm){
    const contentElement = document.getElementById('contentBox');
    const formElement = createElement('div', 'hide', 'toDoForm', '');
    const toDoNameInput = createElement('input', 'toDoFormElement', 'toDoName', '');
    toDoNameInput.placeholder = 'Name of to do';  toDoNameInput.type = 'text';
    const toDoDescriptionInput = createElement('input', 'toDoFormElement', 'toDoDescription', '');
    toDoDescriptionInput.placeholder = 'Description';    toDoDescriptionInput.type = 'text';
    const toDoDueDateInput = createElement('input', 'toDoFormElement', 'toDoDate', '');
    toDoDueDateInput.placeholder = 'Name of to do';  toDoDueDateInput.type = 'text';
    const submitButton = createElement('button', 'submitButton', '', 'SUBMIT');
    submitButton.addEventListener("click", () => takeAndSubmitData());
    const closeButton = createElement('button', 'closeButton', '', 'CLOSE');
    closeButton.addEventListener("click", () => toDoForm.hideToDoForm());
    formElement.appendChild(toDoNameInput);
    formElement.appendChild(toDoDescriptionInput);
    formElement.appendChild(toDoDueDateInput);
    formElement.appendChild(submitButton);
    formElement.appendChild(closeButton);
    contentElement.appendChild(formElement);
}


function takeAndSubmitData(){
    const toDoName = document.getElementById('toDoName').value;
    const toDoDescription = document.getElementById('toDoDescription').value;
    const toDoDate = document.getElementById('toDoDate').value;
    console.log(toDoName);      console.log(toDoDescription);
    console.log(toDoDate);

    createToDoObjectAndAddToUi(toDoName, toDoDescription, toDoDate);
}

function createToDoObjectAndAddToUi(toDoName, toDoDescription, toDoDate){
    let toDoTask = new ToDoTask(toDoName, toDoDescription, toDoDate);
    appendToDoList(createToDoElement(toDoDescription, toDoTask.getId()));
    console.log(`to do id -----------> ${toDoTask.getId()}`);
}




export {createToDoForm, takeAndSubmitData};