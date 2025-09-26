/* A custom element that displays a task in a shadow DOM. */

export class ViewTask {
  #setShadowDOM() {
    // Add content inside the shadow dom root
    const div = document.createElement("div");
    div.textContent = `Task ${this.task.id}: ${this.task.description}`;
    this.shadow.appendChild(div);
  }

  #setStyles() {
    // Apply some styles
    const style = document.createElement('style');
    style.textContent = `
      div {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 5px;
        font-family: Arial, sans-serif;
      }
    `;
    this.shadow.appendChild(style);
  }

  constructor(task) {
    this.task = task;
    this.element = document.createElement('task-view');
    this.shadow = this.element.attachShadow({ mode: 'open' });
    this.#setShadowDOM();
    this.#setStyles();
  }

  render(parent = document.body) {
    parent.appendChild(this.element);
  }
}
