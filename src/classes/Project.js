

class Project{

    static number = 1;
    constructor(projectName, description) {
        this.currentSelectedToDo = '';
        this.name = projectName;
        this.description = description;
        this.id = Project.number++;
        this.noOfProjects = 0;
        this.noOfToDos = 0;
    }

    getId(){
        return this.id;
    }

    getCurrentSelectedToDo(){
        return this.currentSelectedToDo;
    }

    setCurrentSelectedToDo(toDo){
        this.currentSelectedToDo = toDo;
    }



}


export {Project};