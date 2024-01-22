import {createElement} from "./utils";
import AppLogo from './view-dashboard.png';

function createSideBarElement(){
    const sideBarElement = createElement('div', 'sidebar', '', '');
    createSideBarLogoAndTitle(sideBarElement);
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

export {createSideBarElement};