import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 * //TODO: Update to actually match the props being used (id, title, descrip, priority)
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ id, title, description, priority }) {
  console.log("Entered Todo Component");
  console.log("id= ", id);
  console.log("title=", title);
  console.log("description=", description);
  console.log("priority=", priority);

  return (
    <div className="Todo">
      <div><b>{title}</b> <small>(priority: {priority})</small></div>
      <div><small>{description}.</small></div>
    </div>
  );
}

export default Todo;
