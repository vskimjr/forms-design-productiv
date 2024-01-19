import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - id: String
 * - title: String
 * - description: String
 * - priority: Number
 *
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
