


class ToDoTask{

    static number = 1;
    constructor(toDoName, description, toDoDate, priority) {
        this.id = ToDoTask.number ++;
        this.name = toDoName;
        this.description = description;
        this.completed = false;
        this.dueDate = toDoDate;
        this.priority = priority;
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

    setDescription(description){
        this.description = description;
    }

    setDate(date){
        this.dueDate = date;
    }

    setName(name){
        this.name = name;
    }


}

export {ToDoTask};