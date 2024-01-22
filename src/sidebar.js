import {createElement} from "./utils";
import AppLogo from './view-dashboard.png';

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
    const toDoListContainer = createElement('div', 'toDoListContainer', '', '');
    const toDoList = createElement('ul', 'toDoList', '', '');
    const toDOExample = createElement('div', 'toDoDiv', '', 'Walk Dog');
    toDoList.appendChild(toDOExample);
    toDoListContainer.appendChild(toDoList);
    sidebarElement.appendChild(toDoListContainer);
}

export {createSideBarElement};