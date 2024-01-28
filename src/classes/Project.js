

class Project{

    static number = 1;
    constructor(projectName, description) {
        this.currentSelectedToDo = '';
        this.name = projectName;
        this.description = description;
        this.projectId = Project.number++;
        this.noOfToDos = 0;
        this.toDos = [];
    }

    getId(){
        return this.projectId;
    }

    getCurrentSelectedToDo(){
        return this.currentSelectedToDo;
    }

    setCurrentSelectedToDo(toDo){
        this.currentSelectedToDo = toDo;
    }

    removeToDoById(id){
        console.log('All toDos before:  -----> ' + this.toDos);
        for(let index = 0; index < this.toDos.length; index ++){
            if(this.toDos[index].id.toString() === id.toString()){
                console.log('match');
                this.toDos.splice(index, 1);
            }
        }
        console.log('All toDos after:  -----> ' + this.toDos);
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