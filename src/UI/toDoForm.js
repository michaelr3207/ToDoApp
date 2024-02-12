import {createElement, displayToDoForm, hideToDoForm, saveApp, saveData} from "../utils";
import {addEditWindowToToDo, appendToDoList, createToDoElement} from "./sidebar";
import {ToDoTask} from "../classes/ToDo";
import {reloadLocalStorage} from "../loadApplication";

function createToDoForm(toDoApp){
    const contentElement = document.getElementById('contentBox');
    const formElement = createElement('div', 'hide', 'toDoForm', '');
    const toDoNameInput = createElement('input', 'toDoFormElement', 'toDoName', '');
    toDoNameInput.placeholder = 'Name of to do';  toDoNameInput.type = 'text';
    const toDoDescriptionInput = createElement('input', 'toDoFormElement', 'toDoDescription', '');
    toDoDescriptionInput.placeholder = 'Description';    toDoDescriptionInput.type = 'text';
    const toDoDueDateInput = createElement('input', 'toDoFormElement', 'toDoDate', '');
    toDoDueDateInput.placeholder = 'Date';  toDoDueDateInput.type = 'text';
    const submitButton = createElement('button', 'submitButton', 'submitBtnToDo', 'SUBMIT');
    submitButton.addEventListener("click", () => takeAndSubmitDataFromToDoForm(toDoApp));
    const closeButton = createElement('button', 'closeButton', 'closeBtnToDo', 'CLOSE');
    closeButton.addEventListener("click", () => hideToDoFormNew());
    formElement.appendChild(toDoNameInput);
    formElement.appendChild(toDoDescriptionInput);
    formElement.appendChild(toDoDueDateInput);
    formElement.appendChild(submitButton);
    formElement.appendChild(closeButton);
    contentElement.appendChild(formElement);
}

function hideToDoFormNew(){
    const toDoForm = document.getElementById('toDoForm');
    toDoForm.className = 'hide';
}



function takeAndSubmitDataFromToDoForm(toDoApp){
    const toDoName = document.getElementById('toDoName').value;
    const toDoDescription = document.getElementById('toDoDescription').value;
    const toDoDate = document.getElementById('toDoDate').value;
    createToDoObjectAndAddToUi(toDoName, toDoDescription, toDoDate, toDoApp);
}


function createToDoObjectAndAddToUi(toDoName, toDoDescription, toDoDate, toDoApp){
    let toDoTask = new ToDoTask(toDoName, toDoDescription, toDoDate);
    const toDoElement = createToDoElement(toDoName, toDoTask.getId(), toDoApp)
    appendToDoList(toDoElement);
    toDoApp.defaultProject.toDos.push(toDoTask);
    toDoApp.defaultProject.noOfToDos ++;
    addEditWindowToToDo(toDoElement, toDoTask.id, toDoApp);
    hideToDoFormNew();
    saveData();
    saveApp(toDoApp);
    reloadLocalStorage();
    console.log(`to do id -----------> ${toDoTask.name}`);
    console.log(`to do all tasks -----------> ${toDoApp.defaultProject.toDos}`);
}


export {createToDoForm, takeAndSubmitDataFromToDoForm, hideToDoFormNew};