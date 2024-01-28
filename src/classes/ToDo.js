


class ToDoTask{

    static number = 1;
    constructor(toDoName, description, toDoDate) {
        this.projectId = ToDoTask.number ++;
        this.name = toDoName;
        this.description = description;
        this.completed = false;
        this.dueDate = toDoDate;
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

export {ToDoTask};