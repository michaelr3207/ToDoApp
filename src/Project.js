

class Project{

    static number = 1;
    constructor(projectName, description) {
        this.name = projectName;
        this.description = description;
        this.id = Project.number++;
    }

    getId(){
        return this.id;
    }
}


export {Project};