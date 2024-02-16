import {Project} from "./Project";
import {createToDoForm} from "../UI/toDoForm";
import {createProjectDisplayElement} from "../UI/projectDisplay";
import {createHeaderAndSidebarElements} from "../loadApplication";
import {createProjectForm} from "../UI/projectForm";


class ToDoApp{

    constructor(appName) {
        const contentElement = document.getElementById('contentBox');
        createHeaderAndSidebarElements(contentElement, this);    // appending these elements to DOM
        createProjectDisplayElement();
        createToDoForm(this);
        createProjectForm(this);
        this.idOfCurrentSelectedToDo =  '';
        this.appName = appName;
        this.allProjects = [];
        this.defaultProject = new Project('Default', 'Default Project');
        this.noProjects = 0;
        this.currentlyDisplayingProjectToDos = false;
        this.mapNumberOfProjects = 12;
    }

     displayToDoForm(){
        const toDoForm = document.getElementById('toDoForm');
        toDoForm.className = 'toDoForm';
    }

    displayProjectForm(){
        const projectForm = document.getElementById('projectForm');
        projectForm.className = 'projectForm';
    }

    hideProjectForm(){
        const projectForm = document.getElementById('projectForm');
        projectForm.className = 'hide';
    }

    addToDoToProject(toDoId, projectId){
        const toDo = this.defaultProject.getToDoById(toDoId);
        for(let item of this.allProjects){
            if(item.projectId.toString() === projectId.toString())
                item.addToDoTask(toDo);
        }
    }

}

export {ToDoApp};