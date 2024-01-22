import {createElement} from "./utils";
import {addFirstRowToHeaderElement, addSecondRowToHeaderElement} from "./header";
import {createSideBarElement} from "./sidebar";

function loadMainPage(){
    const contentElement = document.getElementById('contentBox');
    const headerElement = createElement('div', 'headerDiv', 'header', '');
    addFirstRowToHeaderElement(headerElement);
    addSecondRowToHeaderElement(headerElement);
    contentElement.appendChild(headerElement);  // adding the header to the DOM
    contentElement.appendChild(createSideBarElement());
}



export {loadMainPage};





