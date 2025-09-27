/**
 * Entry point for the application.
 */

import { TasksApp } from './modules/app/app_tasks.js';
import { ViewTask } from './modules/ui/view_task.js';

function main() {
    const app = new TasksApp();
    
    /* Render some sample tasks */
    for (const task of app.tasks) {
        const view = new ViewTask(task);
        view.render(app.element);
    }
}


main();