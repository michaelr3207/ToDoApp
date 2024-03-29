import {createElement} from "../utils";
import {ToDoApp} from "../classes/ToDoApp";


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
    addEventListenerToProjectCardButtons(closeButton, projectCardDescription, addButton, projectId, toDoApp);
    createProjectCardToDoListDisplay(projectCardElement, projectId, toDoApp, showToDoButton);
}


function addEventListenerToProjectCardButtons(closeButton, descriptionButton, addButton, projectId,  toDoApp){
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



function createProjectCardToDoListDisplay(projectCardElement, projectId, toDoApp, showToDoButton){
    const toDoListElement = createElement('div', 'hide', projectId + 'projectToDoList', '');
    const toDoListTitleElement = createElement('div', 'toDoListProjectTitleDiv', '', 'Current To Dos');
    const toDoListContainer = createElement('div', 'toDoListProjectContainer', '', '');
    const listElement = createElement('div', 'projectOrderedListDiv', 'orderedList' + projectId, '');
    const closeButton = createElement('button', 'closeButtonProjectToDoList', '', 'X');
    showToDoButton.addEventListener("click", () => {
        fillOrderedListWithToDoObjects(toDoListContainer, listElement, toDoApp, projectId);
        displayOrHideProjectToDoList('display', projectId, toDoApp);
    });

    closeButton.addEventListener("click", () => {
       displayOrHideProjectToDoList('hide', projectId, toDoApp);
    });
    toDoListElement.appendChild(toDoListTitleElement);
    toDoListElement.appendChild(toDoListContainer);
    toDoListTitleElement.appendChild(closeButton);
    projectCardElement.appendChild(toDoListElement);
}

function displayOrHideProjectToDoList(option, projectId, toDoApp){
    if(toDoApp.getCurrentlyDisplayingProjectToDos() === true && option !== 'hide'){
        alert('ERROR: Please Close current to do list!');
        return;
    }
    const projectToDoListElement = document.getElementById(projectId + 'projectToDoList');
    if(option === 'hide'){
        toDoApp.setCurrentlyDisplayingProjectToDos(false);
        projectToDoListElement.className = option;
    }
    else{
        toDoApp.setCurrentlyDisplayingProjectToDos(true);
        projectToDoListElement.className = 'toDoListProjectDiv';
    }
}

function fillOrderedListWithToDoObjects(listContainer, listElement, toDoApp, projectId){
    listElement.innerHTML = '';
    const project = toDoApp.getProjectById(projectId);
    console.log(`tetstetstetststst -------->  ${project.projectId}`);
    project.toDos.forEach((item, index) => {
        console.log('counter ++');
        const closeBtnList = createElement('button', 'btnDivToDoListProject', item.id, 'X');
        const expandBtn = createElement('button', 'btnDivToDoListProject', item.id, '+');
        const buttonDiv = createElement('div', 'projectToDoBtnDiv', '', '');
        const newListElement = createElement('div', 'toDoListProjectElement', item.id+'toDoListProject', '');
        newListElement.innerHTML += (index + 1) + ' - ' + item.name;
        addEventListenerToDoListProject(closeBtnList, expandBtn, projectId, item.id, toDoApp);
        buttonDiv.appendChild(closeBtnList);
        buttonDiv.appendChild(expandBtn);
        newListElement.appendChild(buttonDiv);
        addEditWindowToToDoListProjectCard(project, newListElement, item.id);
        listElement.appendChild(newListElement);
    });
    listContainer.appendChild(listElement);
}

function addEventListenerToDoListProject(closeBtnList, expandBtn, projectId, itemId, toDoApp){
    closeBtnList.addEventListener("click", (event) => {
        const listOfToDos = document.getElementById('orderedList' + projectId);
        console.log('--------------- ddd-> ' + listOfToDos);
        const toDoToBeRemoved = document.getElementById(itemId + 'toDoListProject');
        listOfToDos.removeChild(toDoToBeRemoved);
        toDoApp.getProjectById(projectId).removeToDoById(itemId);
    });
    expandBtn.addEventListener("click", () => {
       displayEditWindowToDo(itemId);
    });
}

function addEditWindowToToDoListProjectCard(currentProject, listElement, itemId){
    const toDoExpansionWindow = createElement('div', 'hide', itemId + 'expansionDiv', '' );
    const answerBox = createElement('div', 'answerBoxDiv', '', '');
    const nameBox = createElement('input', 'toDoDate', itemId + 'nameExpansionProject', '');
    const descriptionBox = createElement('textarea', 'toDoExpansionDescription', itemId + 'descriptionExpansion', '');
    const dateBox = createElement('input', 'toDoDate', itemId + 'dateExpansion', '');
    const saveButton = createElement('button', 'saveButtonToDoProject', 'saveButtonToDoProject', 'SAVE');
    saveButton.addEventListener("click", () => {
        const updatedDescription = descriptionBox.value;
        const updatedDate = dateBox.value;
        const updatedName = nameBox.value;
        // listElement.innerHTML =
        currentProject.getToDoById(itemId).setDescription(updatedDescription);
        currentProject.getToDoById(itemId).setDate(updatedDate);
        currentProject.getToDoById(itemId).setName(updatedName);
        toDoExpansionWindow.className = 'hide';
    });
    nameBox.value = currentProject.getToDoById(itemId).name;
    dateBox.value = currentProject.getToDoById(itemId).dueDate;
    descriptionBox.value = currentProject.getToDoById(itemId).description;
    answerBox.appendChild(nameBox);
    answerBox.appendChild(descriptionBox);
    answerBox.appendChild(dateBox);
    toDoExpansionWindow.appendChild(answerBox);
    toDoExpansionWindow.appendChild(saveButton);
    listElement.appendChild(toDoExpansionWindow);
}

function displayEditWindowToDo(itemId){
    const windowToBeDisplayed = document.getElementById(itemId + 'expansionDiv');
    windowToBeDisplayed.className = 'toDoExpansionDiv';
}

export {createProjectCard};