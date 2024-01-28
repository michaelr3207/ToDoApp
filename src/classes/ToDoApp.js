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
        this.appName = appName;
        this.allProjects = [];
        this.defaultProject = new Project('Default', 'Default Project');
    }

    addProject(project){
        this.allProjects.push(project);
    }

    removeProjectById(id){
        console.log('All cards before:  -----> ' + this.allProjects);
        for(let index = 0; index < this.allProjects.length; index ++){
            console.log('looooooop');
            if(this.allProjects[index].projectId.toString() === id.toString()){
                console.log('match found');
               this.allProjects.splice(index, 1);
            }
        }
        console.log('All cards after:  -----> ' + this.getAllProjects());
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

    displayProjectForm(){
        const projectForm = document.getElementById('projectForm');
        projectForm.className = 'projectForm';
    }

    hideProjectForm(){
        const projectForm = document.getElementById('projectForm');
        projectForm.className = 'hide';
    }

}

export {ToDoApp};