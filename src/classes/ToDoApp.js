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
    }

    addProject(project){
        this.allProjects.push(project);
        this.noProjects ++;
    }

    // getProjectById(id) {
    //     this.allProjects.forEach((project, index )  => {
    //         if(project.projectId.toString() === id.toString()){
    //             console.log('i fiundthe adandha');
    //             let projectFound = this.allProjects[index];
    //             return projectFound;
    //         }
    //     })
    // }

    getProjectById(id) {
        console.log('project ud ------> dl ' + id);
        for(let index = 0; index < this.allProjects.length; index ++){
            if(this.allProjects[index].projectId.toString() === id.toString()){
                console.log('match issnadnj');
                console.log('---------------> hlele' + this.allProjects[index].title);
                return this.allProjects[index];
            }
        }
    }

    removeProjectById(id){
        console.log('All cards before:  -----> ' + this.allProjects);
        for(let index = 0; index < this.allProjects.length; index ++){
            if(this.allProjects[index].projectId.toString() === id.toString()){
               this.allProjects.splice(index, 1);
               this.decreaseNoProjects();
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

    decreaseNoProjects(){
        if(this.noProjects >= 0)
            this.noProjects --;
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

    addToDoToProject(toDoId, projectId){
        const toDo = this.defaultProject.getToDoById(toDoId);
        for(let item of this.allProjects){
            if(item.projectId.toString() === projectId.toString())
                item.addToDoTask(toDo);
        }
    }

}

export {ToDoApp};