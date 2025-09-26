/* Task class represents a single task. */
export class Task {
    /*
    @ param: {number} id - task unique identifier.
    @ param: {string} description - task description.
    @ param: {string} rational - task rationale.
    @ param: {bool} completed - task completion status.
    @ param: {array} tags - task tags.
    */
    constructor(id, description, rational, completed, tags = []) {
        this._id = id;
        this._description = description;
        this._rational = rational;
        this._completed = completed;
        this._tags = tags;
    }

    /* Getters */
    get id() { return this._id; }
    get description() { return this._description; }
    get rational() { return this._rational; }
    get completed() { return this._completed; }
    get tags() { return this._tags; }

}
