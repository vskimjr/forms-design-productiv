import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo - object of form {title, description, id, priority} all strings except
 * id is number
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * State:
 * - isEditing - Boolean logic
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {

  console.log("Entered EditableTodo Component");
  console.log("todo= ", todo);
  console.log("update=", update);
  console.log("remove=", remove);

  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited using boolean logic */
  function toggleEdit() {
    setIsEditing(true);
  }

  /** Call remove fn passed to this. Takes and id as a string and invokes it in
   * remove fn.
   */
  function handleDelete(id) {
    remove(id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. Takes in
   * formData as {title, description, priority, id}
   */
  function handleSave(formData) {
    update(formData);
    setIsEditing(false);
  }

  return (
    <div className="EditableTodo">
      {isEditing
        ?
        <TodoForm handleSave={handleSave} initialFormData={todo} />
        :
        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={() => handleDelete(todo.id)}>
              Del
            </button>
          </div>
          <Todo
            id={todo.id}
            title={todo.title}
            description={todo.description}
            priority={todo.priority}
          />
        </div>
      }

    </div>
  );
}

export default EditableTodo;
