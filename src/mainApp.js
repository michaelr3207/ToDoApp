import {ToDoApp} from "./ToDoApp";
import {createToDo} from "./ToDo";
import {createElement} from "./utils";
import {Project} from "./Project";

function main(){
    const toDoExample = createToDo('sample task', 'descriptioj', 1);
    toDoExample.description = 'cheese';
    toDoExample.taskName = 'bruh';
    const toDOApp = new ToDoApp('app');
    toDOApp.addToDo(toDoExample);
    console.log(toDoExample.description);
    console.log(toDOApp.getAllToDos());

    console.log('hi')

    const project1 = new Project('1', 'ffff');
    const project2 = new Project('1', 'fffffggggg');
    const project3 = new Project('1', 'fffffggggg');


    console.log('id below!');
    console.log(project1.getId());
    console.log(project3.getId());

}

export {main};