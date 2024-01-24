

class ToDoApp{


    constructor(appName) {
        this.appName = appName;
        this.allToDos = [];
        this.allProjects = [];
    }

    addProject(project){
        this.allProjects.push(project);
    }

    addToDo(toDo){
        this.allToDos.push(toDo);
    }

    getAllProjects(){
        return this.allProjects;
    }

    getAllToDos(){
        return this.allToDos;
    }

    getToDoAtIndex(index){
        return this.allToDos[index];
    }
}

export {ToDoApp};