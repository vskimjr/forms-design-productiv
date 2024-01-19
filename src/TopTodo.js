import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos: array of objects
 *
 * TodoApp -> TopTodo
 */

function TopTodo({todos}) {
  console.log("Entered TopTodo Component");
  console.log("todos= ", todos);

  // lowest-priority # is the highest priority
  let top = todos.reduce(
    (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  return <Todo
    id={top.id}
    title={top.title}
    description={top.description}
    priority={top.priority}
  />;
}

export default TopTodo;