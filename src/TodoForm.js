import React, { useState } from "react";


const DEFAULT_DATA = {
  title: '',
  description: '',
  priority: '', //TODO: Make this actually 1 to match the data type of the input field
  id: ''
};

/** Form for adding.
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */

function TodoForm({ handleSave, initialFormData = { DEFAULT_DATA } }) {

  console.log("Entered TodoForm Component");
  console.log("handleSave= ", handleSave);
  console.log("initialFormData", initialFormData);
  //TODO: Follow naming convention between state and setState
  const [todoFormData, setFormData] = useState(initialFormData);

  /** Update form input, takes in event. */
  function handleChange(evt) {
    // TODO: Priority value is pulled out of the form as a STRING, but the app
    // expects on this to be a Number, best place to make this change is here prior
    // to leaving the form and maintaing this in form state.
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form, takes in event. */
  //TODO: Resetting to Defualt_Data, but really want to revert back to initialFormData in case this is passed to the function, which should be the default.
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSave(todoFormData);
    setFormData(DEFAULT_DATA);
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>

      <div className="mb-3">
        <label htmlFor="TodoForm-title"></label>
        <input
          id="TodoForm-title"
          name="title"
          className="form-control"
          placeholder="Title"
          onChange={handleChange}
          value={todoFormData.title}
          aria-label="Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="TodoForm-description"></label>
        <textarea
          id="TodoForm-description"
          name="description"
          className="form-control"
          placeholder="Description"
          onChange={handleChange}
          value={todoFormData.description}
          aria-label="Description"
        />
      </div>

      <div className="mb-3 d-flex justify-content-between">
        <div className="w-75 d-flex justify-content-between">
          <label htmlFor="TodoForm-priority"
            className="d-inline-flex">Priority:&nbsp;&nbsp;
          </label>
          <select id="TodoForm-priority"
            name="priority"
            value={todoFormData.priority}
            onChange={handleChange}
            className="form-control form-control-sm d-inline-flex"
          >
            <option value={1}>Ultra-Über</option>
            <option value={2}>Über</option>
            <option value={3}>Meh</option>
          </select>
        </div>
        <button className="btn-primary rig btn btn-sm NewTodoForm-addBtn">
          Gø!
        </button>
      </div>

    </form>
  );
}

export default TodoForm;
