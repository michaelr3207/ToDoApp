import {Project} from "./Project";
import {createToDoForm} from "../UI/toDoForm";
import {createProjectDisplayElement} from "../UI/projectDisplay";
import {createHeaderAndSidebarElements} from "../loadApplication";


class ToDoApp{

    constructor(appName) {
        const contentElement = document.getElementById('contentBox');
        createHeaderAndSidebarElements(contentElement, this);    // appending these elements to DOM
        createProjectDisplayElement();
        createToDoForm(this);
        this.appName = appName;
        this.allProjects = [];
        this.defaultProject = new Project('Default', 'Default Project');
    }

    addProject(project){
        this.allProjects.push(project);
    }

    // addToDo(toDo){
    //     this.allToDos.push(toDo);
    // }

    getAllProjects(){
        return this.allProjects;
    }

    getAllToDos(){
        return this.allToDos;
    }

    getToDoAtIndex(index){
        return this.allToDos[index];
    }

    getAppName(){
        return this.appName;
    }

    setAppName(name){
        this.appName = name;
    }
     displayToDoForm(){
        const toDoForm = document.getElementById('toDoForm');
        toDoForm.className = 'toDoForm';
    }

     hideToDoForm(){
        const toDoForm = document.getElementById('toDoForm');
        toDoForm.className = 'hide';
    }

}

export {ToDoApp};