/* A custom element that displays a task in a shadow DOM. */

export class ViewTask {
  constructor(task) {
    this.task = task;
    this.element = document.createElement('task-view');
    this.shadow = this.element.attachShadow({ mode: 'open' });
    
    // Add content inside the shadow root
    const h1 = document.createElement("h1");
    h1.textContent = "Hello from Shadow DOM!";
    this.shadow.appendChild(h1);
}
  render(parent = document.body) {
    parent.appendChild(this.element);
  }
}
