import { Task } from "../model/task.js";


export class TaskFactory {
    static create(id, description, rational, completed, tags = []) {
        console.log(`TaskFactory.create() returning: Task(id=${id}})`);
        return new Task(id, description, rational, completed, tags);
    }
}
