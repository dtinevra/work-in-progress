/**
 * Entry point for the application.
 */

import { TasksApp } from './modules/app/app_tasks.js';
import { ViewTask } from './modules/ui/view_task.js';

function main() {
    const app = new TasksApp();
    const task_a = app.createTask('Sample Task', 'This is a sample task.', false, ['sample', 'task']);
    const view_a = new ViewTask(task_a);
    view_a.render();
    app.createTask('Another Task', 'This is another task.', true, ['another', 'task']);
}


main();