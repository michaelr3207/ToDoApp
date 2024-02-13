import {
    createElement,
    extractNumberFromElementId,
    getProjectToDoById,
    reloadSideBarToDoElements,
    removeToDoById, saveApp, saveData
} from "../utils";
import AppLogo from '../images/check-outline.png';
import {reloadLocalStorage} from "../loadApplication";

function createSideBarElement(){
    const sideBarElement = createElement('div', 'sidebar', '', '');
    createSideBarLogoAndTitle(sideBarElement);
    createToDoContainer(sideBarElement);
    return sideBarElement;
}


function createSideBarLogoAndTitle(sidebarElement){
    const sideBarLogoAndTitle = createElement('div','sidebarLogoAndTitle', '', '' );
    const sidebarImageElement = createElement('div', 'sidebarDashImg', '', '');
    const appLogoImage = new Image();
    appLogoImage.src = AppLogo;
    sidebarImageElement.appendChild(appLogoImage);
    const dashTitleDiv = createElement('div', 'dashTitle', '', 'To Do App');
    sideBarLogoAndTitle.appendChild(sidebarImageElement);
    sideBarLogoAndTitle.appendChild(dashTitleDiv);
    sidebarElement.appendChild(sideBarLogoAndTitle);
}

function createToDoContainer(sidebarElement){
    const toDoListContainer = createElement('div', 'toDoListContainer', 'listContainer', '');
    sidebarElement.appendChild(toDoListContainer);
}

function createToDoElement(name, id, toDoApp){
    const expandAndDivBtnDiv = createElement('div', 'expandAndDeleteBtnDiv', '', '');
    const toDoElement = createElement('div', 'toDoElement', id + 'toDo', '');
    const deleteBtn = createElement('button', 'deleteBtnSidebar', id + 'deleteBtnToDoElement', 'X');
    const expandBtn = createElement('button', 'expandBtnSidebar', id + 'expandBtnToDoElement', '+');
    const toDoTaskElement = createElement('div', 'toDoTask', '', `- ${name}`);
    const addBtn = createElement('button', 'addBtn', id + 'addBtnToDoElement', '+');
    expandBtn.addEventListener("click", () => {
        toDoElement.style.textDecoration = 'underline';
        const sideBarExpansionElement = document.getElementById(id + 'expansionDivSidebar');
        sideBarExpansionElement.className = 'toDoExpansionSidebar';
    });
    addEventListenerToDoTaskButtons(deleteBtn, addBtn, id,  toDoApp);
    expandAndDivBtnDiv.appendChild(deleteBtn);
    expandAndDivBtnDiv.appendChild(expandBtn);
    expandAndDivBtnDiv.appendChild(addBtn)
    toDoElement.appendChild(toDoTaskElement);
    toDoElement.appendChild(expandAndDivBtnDiv);
    console.log(toDoElement);
    return toDoElement;
}

function addEditWindowToToDo(toDoElement, itemId, toDoApp){
    const expansionWindow = createElement('div', 'hide', itemId + 'expansionDivSidebar', '' );
    const answerBox = createElement('div', 'answerBoxDivSidebar', '', '');
    const nameBox = createElement('input', 'toDoExpansionNameSidebar', itemId + 'nameExpansionSidebar', '');
    const descriptionBox = createElement('textarea', 'toDoExpansionDescriptionSidebar', itemId + 'descriptionExpansionSidebar', '');
    const dateBox = createElement('input', 'toDoDateDescriptionSidebar', itemId + 'dateExpansionSidebar', '');
    const saveButton = createElement('button', 'saveButtonToDoProjectSidebar', 'saveButtonToDoProjectSidebar', 'SAVE');
    saveButton.addEventListener("click", () => {
        const  updatedName = nameBox.value;
        const updatedDescription = descriptionBox.value;
        const updatedDate = dateBox.value;
        // toDoApp.defaultProject.getToDoById(itemId).setName(updatedName);
        getProjectToDoById(toDoApp.defaultProject, itemId).name = updatedName;
        // toDoApp.defaultProject.getToDoById(itemId).setDescription(updatedDescription);
        getProjectToDoById(toDoApp.defaultProject, itemId).description = updatedDescription;
        // toDoApp.defaultProject.getToDoById(itemId).setDate(updatedDate);
        getProjectToDoById(toDoApp.defaultProject, itemId).dueDate = updatedDate;
        expansionWindow.className = 'hide';
        reloadSideBarToDoElements(toDoApp);
    });
    nameBox.value = getProjectToDoById(toDoApp.defaultProject, itemId).name;
    descriptionBox.value = getProjectToDoById(toDoApp.defaultProject, itemId).description;
    dateBox.value = getProjectToDoById(toDoApp.defaultProject, itemId).dueDate;
    answerBox.appendChild(nameBox);
    answerBox.appendChild(descriptionBox);
    answerBox.appendChild(dateBox);
    expansionWindow.appendChild(answerBox);
    expansionWindow.appendChild(saveButton);
    toDoElement.appendChild(expansionWindow);
}

function appendToDoList(task){
    const toDoList = document.getElementById('listContainer');
    toDoList.appendChild(task);
}

function addEventListenerToDoTaskButtons(deleteBtn, addBtn, id, toDoApp){
    deleteBtn.addEventListener("click", (e) => {
        const toDoListContainer = document.getElementById('listContainer');
        const toDoElement = document.getElementById(Number.parseInt(extractNumberFromElementId(e.target.id)) + 'toDo');
        toDoListContainer.removeChild(toDoElement);
        // toDoApp.defaultProject.removeToDoById(e.target.id);
        removeToDoById(toDoApp.defaultProject, Number.parseInt(extractNumberFromElementId(e.target.id)));
        toDoApp.defaultProject.noOfToDos --;
        saveData();
        saveApp(toDoApp);
        reloadLocalStorage();
    });
    addBtn.addEventListener("click", () => {
        toDoApp.idOfCurrentSelectedToDo = id;
    });
}

export {createSideBarElement, appendToDoList, createToDoElement, addEditWindowToToDo};