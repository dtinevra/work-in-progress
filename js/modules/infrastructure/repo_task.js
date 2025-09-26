import { TaskFactory } from './factory_task.js';

export class TaskRepo {
    constructor() {
        this.tasks = [];
        this.loadTasks();
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getAllTasks() {
        return this.tasks;
    }

    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }

    loadTasks() {
        const task_1 = TaskFactory.create(1, 'Sample Task', 'This is a sample task.', false, ['sample', 'task']);
        const task_2 = TaskFactory.create(2, 'Another Task', 'This is another task.', true, ['another', 'task']);
        const task_3 = TaskFactory.create(3, 'Third Task', 'This is the third task.', false, ['third', 'task']);
        this.addTask(task_1);
        this.addTask(task_2);
        this.addTask(task_3);
    }
}
