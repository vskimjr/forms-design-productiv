import React, { useState } from "react";


const DEFAULT_DATA = {
  title: '',
  description: '',
  priority: 1,
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

function TodoForm({ handleSave, initialFormData = DEFAULT_DATA }) {

  console.log("Entered TodoForm Component");
  console.log("handleSave= ", handleSave);
  console.log("initialFormData", initialFormData);
  const [todoFormData, setTodoFormData] = useState(initialFormData);

  /** Update form input, takes in event. */
  function handleChange(evt) {
    // FIXME: fixed bug where priority number was passed as string, debugging
    // error "A component is changing an uncontrolled input to be controlled.
    // This is likely caused by the value changing from undefined to a defined value, "

    const { name, value } = evt.target;

    console.log("****name: ", name, value, Number(value))

    setTodoFormData(fData => (

      name === "priority"
        ?
        {
          ...fData,
          priority: Number(value)
        }
        :
        {
          ...fData,
          [name]: value,
        }));
  }

  /** Call parent function and clear form, takes in event. */
  function handleSubmit(evt) {
    evt.preventDefault();
    setTodoFormData(initialFormData);
    handleSave(todoFormData);
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
          required
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
          required
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
            required
          >
            <option value="">Choose-One</option>
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
