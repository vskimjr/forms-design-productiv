import React, { useState } from "react";


const DEFAULT_DATA = {
  title: '',
  description: '',
  priority: '',
  id: ''
}

/** Form for adding.
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */

function TodoForm({handleSave, initialFormData={DEFAULT_DATA}}) {

  const [todoFormData, setFormData] = useState({initialFormData})

  /** Update form input. */
  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.prevenDefault();
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
