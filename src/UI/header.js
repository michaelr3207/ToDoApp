import {createElement, displayToDoForm} from "../utils";
import MagnifyImage from "../images/magnify.png";
import BellImage from "../images/bell-outline.png";
import MessengerImage from "../images/facebook-messenger.png";
import ProfilePicture from "../images/fbFace.jpg";

function addFirstRowToHeaderElement(headerElement){
    const searchBar = createElement('div', 'searchBar', '', '');
    const searchIconImage = new Image();
    const bellImage = new Image();
    const messengerLogo = new Image();
    const searchInput = createElement('input', 'inputBox', '', '');
    searchInput.name = 'searchBox';  // may not be used
    const iconBarElement = createElement('div', 'iconBar', '', '');
    const userNameElement = createElement('div', 'userName', '', 'Michael R');

    searchIconImage.src = MagnifyImage;
    bellImage.src = BellImage;
    messengerLogo.src = MessengerImage;
    iconBarElement.appendChild(bellImage);
    iconBarElement.appendChild(messengerLogo);
    iconBarElement.appendChild(userNameElement);
    searchBar.appendChild(searchIconImage);
    searchBar.appendChild(searchInput);
    searchBar.appendChild(iconBarElement);
    headerElement.appendChild(searchBar);
}

function addSecondRowToHeaderElement(headerElement, toDoApp){
    const secondRowElement = createElement('div', 'secondRow', '', '');
    const personDetailsElement = createElement('div', 'personDetails', '', '',);
    const emptyProfilePicImage = new Image();
    const detailsElement = createElement('div', 'details', '', ' <span class="hi">Hi There</span>');
    const personName = createElement('div', 'personName', '', 'Michael Robinson');
    emptyProfilePicImage.src = ProfilePicture;
    detailsElement.appendChild(personName);
    personDetailsElement.appendChild(emptyProfilePicImage);
    personDetailsElement.appendChild(detailsElement);
    secondRowElement.appendChild(personDetailsElement);
    addNavButtonsToHeader(secondRowElement, toDoApp);
    headerElement.appendChild(secondRowElement);
}

function addNavButtonsToHeader(secondRowElement, toDoApp){
    const navButtonElement = createElement('div','navButtons', '', '');
    const newToDoButton = createElement('button', 'firstBtn', '', 'To Do');
    const newProjectButton = createElement('button', 'newProjectButton', '', 'Project');
    const clearAllButton = createElement('button', 'clearAllButton', '', 'Clear All');
    navButtonElement.appendChild(newToDoButton);
    navButtonElement.appendChild(newProjectButton);
    navButtonElement.appendChild(clearAllButton);
    secondRowElement.appendChild(navButtonElement);
    addEventListenerToNavButtons(newToDoButton, toDoApp);
}

function addEventListenerToNavButtons(newToDoButton, toDoApp){
    newToDoButton.addEventListener("click", () => {toDoApp.displayToDoForm()})
}

export {addFirstRowToHeaderElement, addSecondRowToHeaderElement, addNavButtonsToHeader};