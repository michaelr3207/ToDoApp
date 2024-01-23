import {createElement} from "./utils";


function createProjectDisplayElement(){
    const contentElement = document.getElementById('contentBox');
    const projectDisplayElement = createElement('div', 'projectDisplay', '', '');
    const section1Element = createElement('div', 'section1', '', '');
    const headerForSection1Element = createElement('div', 'headerForSection1', '', 'Your Projects');
    const projectGrid = createElement('div', 'projectGrid', '', '');
    section1Element.appendChild(headerForSection1Element);   section1Element.appendChild(projectGrid);
    projectDisplayElement.appendChild(section1Element);
    contentElement.appendChild(projectDisplayElement);
}


export {createProjectDisplayElement};
