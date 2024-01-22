import {createElement} from "./utils";
import MagnifyImage from "./magnify.png";
import BellImage from "./bell-outline.png"
import MessengerImage from './facebook-messenger.png'
import ProfilePicture from './fbFace.jpg';
import {addFirstRowToHeaderElement, addSecondRowToHeaderElement} from "./header";

function loadMainPage(){
    const contentElement = document.getElementById('contentBox');
    const headerElement = createElement('div', 'headerDiv', 'header', '');
    addFirstRowToHeaderElement(headerElement);
    addSecondRowToHeaderElement(headerElement);
    contentElement.appendChild(headerElement);  // adding the header to the DOM
}



export {loadMainPage};





