import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos = [] }) {

  console.log("Entered TodoApp Component");
  console.log("initialTodos= ", initialTodos);

  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list, takes in {title, description, priority, id}
   * where title, description, and id are strings and priority is a number
   */

  function create(newTodo) {
    const newTodoWithID = { ...newTodo, id: uuid() };
    setTodos((currTodos) => {
      return [...currTodos, newTodoWithID];
    });
  }

  /** update a todo with updatedTodo, takes in {title, description, priority, id}
   * where title, description, and id are strings and priority is a number */

  function update(updatedTodo) {
    setTodos(currTodos => (currTodos.map((currTodo) =>
      currTodo.id === updatedTodo.id ? updatedTodo : currTodo)
    ));
  }

  /** delete a todo by id, takes in id which is a string */

  function remove(id) {
    setTodos((currTodos) => currTodos.filter(currTodo => currTodo.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          {todos.length === 0
            ?
            <span className="text-muted">You have no todos.</span>
            :
            <EditableTodoList todos={todos} update={update} remove={remove} />
          }
        </div>

        <div className="col-md-6">
          <section className="mb-4">
            <h3>Top Todo</h3>
            {todos.length === 0
              ?
              <span className="text-muted">No todos yet!</span>
              :
              <TopTodo todos={todos} />
            }
          </section>
          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>

        </div>

      </div>
    </main>
  );
}

export default TodoApp;