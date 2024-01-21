import {createElement} from "./utils";
import MagnifyImage from "./magnify.png";
import BellImage from "./bell-outline.png"
import MessengerImage from './facebook-messenger.png'
import ProfilePicture from './fbFace.jpg';

function loadMainPage(){
    const contentElement = document.getElementById('contentBox');
    const headerElement = createElement('div', 'headerDiv', 'header', '');
    addFirstRowToHeaderElement(headerElement);
    contentElement.appendChild(headerElement);
}

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

function addSecondtRowToHeaderElement(headerElement){
    const secondRowElement = createElement('div', 'secondRow', '', '');
    const personDetailsElement = createElement('div', 'personsDetails', '', '',);
    const emptyProfilePicImage = new Image();

    emptyProfilePicImage.src = ProfilePicture;

}


export {loadMainPage};





