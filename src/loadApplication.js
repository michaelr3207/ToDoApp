import {createElement} from "./utils";
import MagnifyImage from "./magnify.png";
import BellImage from "./bell-outline.png"
import MessengerImage from './facebook-messenger.png'

function loadMainPage(){
    const contentElement = document.getElementById('contentBox');
    const headerElement = createElement('div', 'headerDiv', 'header', '');

    contentElement.appendChild(headerElement);
}

function addToHeaderElement(headerElement){
    const searchBar = createElement('div', 'searchBar', '', '');
    const searchIconImage = new Image();
    const bellImage = new Image();
    const messengerLogo = new Image();
    const searchInput = createElement('input', 'inputBox', '', '');
    searchInput.name = 'searchBox';  // may not be used
    const iconBarElement = createElement('div', 'iconBar', '', '');
    const userNameElement = createElement('div', 'userName', '', 'Michael R');

    iconBarElement.appendChild()
    searchIconImage.src = MagnifyImage;
    bellImage.src = BellImage;
    messengerLogo.src = MessengerImage;

}


export {loadMainPage};





