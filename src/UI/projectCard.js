import {
    createElement,
    extractNumberFromElementId,
    getProjectById, getProjectToDoById, loadApp,
    removeProjectById, removeToDoById,
    saveApp,
    saveData
} from "../utils";
import {ToDoApp} from "../classes/ToDoApp";
import {reloadLocalStorage} from "../loadApplication";



function createProjectCard(projectGrid,projectName, description, projectId, toDoApp){
    const projectCardElement = createElement('div', 'projectCard', projectId + 'project', '');
    const projectCardButtonDiv = createElement('div', 'projectButtonDiv', '', '');
    const closeButton = createElement('button', 'closeButtonCard', projectId + 'closeBtnProject', 'X');
    const addButton = createElement('button', 'addButton', projectId + 'addBtnProject', "+");
    const projectCardTitle = createElement('div', 'projectCardTitle', '', projectName);
    const projectCardDescription = createElement('button', 'toDoButton', projectId + 'descriptionBtnProject', 'Description');
    const showToDoButton = createElement('button', 'toDoButton', projectId + 'showToDoBtnProject', 'To Dos');
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
    saveData();
}


function addEventListenerToProjectCardButtons(closeButton, descriptionButton, addButton, projectId,  toDoApp){
    closeButton.addEventListener("click", (event) => {
        const extractedId = extractNumberFromElementId(event.target.id);
        console.log(`${extractedId} this is the current id ----------`)
        const projectGridDiv = document.getElementById('projectGridDiv');
        const cardToBeRemoved = document.getElementById(Number.parseInt(extractedId) + 'project');
        projectGridDiv.removeChild(cardToBeRemoved);
        console.log(extractedId + '<-------------------zz');
        // toDoApp.removeProjectById(extractedId);
        removeProjectById(Number.parseInt(extractedId, toDoApp));
        saveApp(toDoApp);
        saveData();
    });
    descriptionButton.addEventListener("click", (e) => {
        displayProjectCardDescription(e.target.id.charAt(0));
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
            saveData();
            saveApp(toDoApp);
        }
        else{
            alert('No To DO is Selected!');
        }
    });
}


function addDescriptionBoxToProjectCard(projectCardElement, description, projectId){
    const projectDescriptionElement = createElement('div', 'hide', projectId + 'projectDescription', description);
    const projectDescriptionCloseButton = createElement('div', 'descriptionCloseBtn', projectId + 'projectCloseBtnOnCard', 'X');
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


// first commnent


function createProjectCardToDoListDisplay(projectCardElement, projectId, toDoApp, showToDoButton){
    const toDoListElement = createElement('div', 'hide', projectId + 'projectToDoList', '');
    const toDoListTitleElement = createElement('div', 'toDoListProjectTitleDiv', '', 'Current To Dos');
    const toDoListContainer = createElement('div', 'toDoListProjectContainer', projectId + 'toDoListContainer', '');
    const listElement = createElement('div', 'projectOrderedListDiv', 'orderedList' + projectId, '');
    const closeButton = createElement('button', 'closeButtonProjectToDoList', projectId + 'closeBtnToListDisplay', 'X');
    showToDoButton.addEventListener("click", () => {
        reloadListAfterDeletion(projectId, toDoApp);
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
    if(toDoApp.currentlyDisplayingProjectToDos === true && option !== 'hide'){
        alert('ERROR: Please Close current to do list!');
        return;
    }
    const projectToDoListElement = document.getElementById(projectId + 'projectToDoList');
    if(option === 'hide'){
        toDoApp.currentlyDisplayingProjectToDos = false;
        projectToDoListElement.className = option;
    }
    else{
        toDoApp.currentlyDisplayingProjectToDos = true;
        projectToDoListElement.className = 'toDoListProjectDiv';
    }
}

function fillOrderedListWithToDoObjects(listContainer, listElement, toDoApp, projectId){
    listElement.innerHTML = '';
    const project = getProjectById(projectId, toDoApp);
    console.log(`tetstetstetststst -------->  ${project.projectId}`);
    project.toDos.forEach((item, index) => {
        console.log('counter ++');
        const priorityBtnList = createElement('button', 'btnDivToDoListProject', item.id + 'priorityBtnProjectEdit', '-');
        const closeBtnList = createElement('button', 'btnDivToDoListProject', item.id + 'closeBtnProjectEdit', 'X');
        const expandBtn = createElement('button', 'btnDivToDoListProject', item.id + 'expandBtnProjectEdit', '+');
        const buttonDiv = createElement('div', 'projectToDoBtnDiv', '', '');
        const newListElement = createElement('div', 'toDoListProjectElement', item.id+'toDoListProject', '');
        newListElement.innerHTML += (index + 1) + ' - ' + item.name;
        setPriorityColour(priorityBtnList, item);
        addEventListenerToDoListProject(closeBtnList, expandBtn, projectId, item.id, toDoApp);
        buttonDiv.appendChild(priorityBtnList);
        buttonDiv.appendChild(closeBtnList);
        buttonDiv.appendChild(expandBtn);
        newListElement.appendChild(buttonDiv);
        addEditWindowToToDoListProjectCard(project, newListElement, item.id, toDoApp);
        listElement.appendChild(newListElement);
        saveData();
        saveApp(toDoApp);
        // reloadLocalStorage();
    });
    listContainer.appendChild(listElement);
}

function setPriorityColour(priorityDisplay, item) {
    if(item.priority === 'high')
        priorityDisplay.style.background = 'red';
    else if(item.priority === 'medium')
        priorityDisplay.style.background = 'orange';
    else
        priorityDisplay.style.background = 'green';
}

function addEventListenerToDoListProject(closeBtnList, expandBtn, projectId, itemId, toDoApp){
    closeBtnList.addEventListener("click", (event) => {
        const listOfToDos = document.getElementById('orderedList' + projectId);
        console.log('--------------- ddd-> ' + listOfToDos);
        const toDoToBeRemoved = document.getElementById(itemId + 'toDoListProject');
        listOfToDos.removeChild(toDoToBeRemoved);
        // toDoApp.getProjectById(projectId).removeToDoById(itemId);
        const listContainer = document.getElementById(projectId + 'toDoListContainer');
        const fetchedListElement = document.getElementById('orderedList' + projectId);
        if(fetchedListElement !== null){
            listContainer.removeChild(fetchedListElement);
        }
        const listElement = createElement('div', 'projectOrderedListDiv', 'orderedList' + projectId, '');
        fillOrderedListWithToDoObjects(listContainer, listElement, toDoApp, projectId);

        removeToDoById(getProjectById(projectId, toDoApp), itemId);
        reloadListAfterDeletion(projectId, toDoApp);
        // saveData();
        saveApp(toDoApp);
        // toDoApp = loadApp();
        // reloadLocalStorage();  //ToDo add in the fill up list method here
        // reloadLocalStorage();
    });
    expandBtn.addEventListener("click", () => {
       displayEditWindowToDo(itemId, toDoApp);
    });
}

function reloadListAfterDeletion(projectId, toDoApp){
    console.log('runmnggomg ,ammm');
    const listContainer = document.getElementById(projectId + 'toDoListContainer');
    const fetchedListElement = document.getElementById('orderedList' + projectId);
    if(fetchedListElement !== null){
        console.log('runmnggomg ,ammm ------------------------------>');
        listContainer.removeChild(fetchedListElement);
    }
    const listElement = createElement('div', 'projectOrderedListDiv', 'orderedList' + projectId, '');
    fillOrderedListWithToDoObjects(listContainer, listElement, toDoApp, projectId);
}

function addEditWindowToToDoListProjectCard(currentProject, listElement, itemId, toDoApp){
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
        // currentProject.getToDoById(itemId).setDescription(updatedDescription);
        getProjectToDoById(currentProject, itemId).description = updatedDescription;
        // currentProject.getToDoById(itemId).setDate(updatedDate);
        getProjectToDoById(currentProject, itemId).dueDate = updatedDate;
        // currentProject.getToDoById(itemId).setName(updatedName);
        getProjectToDoById(currentProject, itemId).name = updatedName;
        const listElement = createElement('div', 'projectOrderedListDiv', 'orderedList' + currentProject.projectId,  '');
        toDoExpansionWindow.className = 'hide';
        saveData();
        saveApp(toDoApp);
        // reloadLocalStorage();
        // reloadToDoListElementsProjectCard(listElement)
    });
    // nameBox.value = currentProject.getToDoById(itemId).name;
    nameBox.value = getProjectToDoById(currentProject, itemId).name;
    dateBox.value = getProjectToDoById(currentProject, itemId).dueDate;
    descriptionBox.value =getProjectToDoById(currentProject, itemId).description;
    answerBox.appendChild(nameBox);
    answerBox.appendChild(descriptionBox);
    answerBox.appendChild(dateBox);
    toDoExpansionWindow.appendChild(answerBox);
    toDoExpansionWindow.appendChild(saveButton);
    listElement.appendChild(toDoExpansionWindow);
}

function displayEditWindowToDo(itemId, toDoApp){
    const windowToBeDisplayed = document.getElementById(itemId + 'expansionDiv');
    windowToBeDisplayed.className = 'toDoExpansionDiv';
    saveData();
    saveApp(toDoApp);
}

export {reloadListAfterDeletion, createProjectCard, displayProjectCardDescription, fillOrderedListWithToDoObjects, displayOrHideProjectToDoList};