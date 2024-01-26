

class Project{

    static number = 1;
    constructor(projectName, description) {
        this.currentSelectedToDo = '';
        this.name = projectName;
        this.description = description;
        this.id = Project.number++;
        this.noOfToDos = 0;
        this.toDos = [];
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

    addToDoTask(task){
        if(task != null){
            this.noOfToDos ++;
            this.toDos.push(task);
        }
    }

    addToTask(task){
        if(task != null){
            this.noOfToDos ++;
            this.toDos.push(task);
        }
    }

    getAllToDos(){
        console.log(this.toDos[0]);
        return this.toDos;
    }



}


export {Project};