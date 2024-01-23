import {createElement} from "./utils";
import {addFirstRowToHeaderElement, addSecondRowToHeaderElement} from "./header";
import {appendToDoList, createSideBarElement, createToDoElement} from "./sidebar";

function loadMainPage(){
    const contentElement = document.getElementById('contentBox');
    const headerElement = createElement('div', 'headerDiv', 'header', '');
    addFirstRowToHeaderElement(headerElement);
    addSecondRowToHeaderElement(headerElement);
    contentElement.appendChild(headerElement);  // adding the header to the DOM
    contentElement.appendChild(createSideBarElement());
    appendToDoList(createToDoElement('testst', '0'));
    appendToDoList(createToDoElement('walk dog', '0'));
    appendToDoList(createToDoElement('testst', '0'));

}



export {loadMainPage};





