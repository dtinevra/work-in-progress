import { TaskRepo } from "../infrastructure/repo_task.js";
import { TaskFactory } from "../infrastructure/factory_task.js";

export class TasksApp {
    constructor() {
        this.element = document.querySelector('.app');
        this._task_repo = new TaskRepo();
    }

    get tasks() { return this._task_repo.getAllTasks(); }

    /* Creates a new Task object. */
    createTask(description, rational, completed, tags) {
        const task = TaskFactory.create(
          this.tasks.length + 1,
          description,
          rational,
          completed,
          tags
        );
        return task;
    }
}
