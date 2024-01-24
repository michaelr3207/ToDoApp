


function createToDo(taskName, description, toDoId){
    let isComplete = false;
    const getIsComplete = () => isComplete;
    const changeIsComplete = (completedOrNot) => isComplete = completedOrNot;

    return {taskName, description, getIsComplete, changeIsComplete, toDoId};
}


export {createToDo};