import React from "react";
import { useState } from "react";
import useTodoStore from "./useTodoStore";

function TodoList() {
  const [todoValue, setTodoValue] = useState("");
  const { todos, addTodo, deleteTodo, modifiedTodo } = useTodoStore(
    (state) => state
  );
  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(todoValue);
    setTodoValue("");
  };

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input 
                type="text"
                id="newTodo"
                onChange={(e) => setTodoValue(e.target.value)}
                name="doSomthing"
              />
              <button type="submit">Add Todo</button>
          </form>

          <ul>
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <span>
                    {todo.text}{" "}
                  </span>
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                  <button onClick={() => modifiedTodo(todo.id)}>Modified</button>
                </li>
              )
            })}
          </ul>
      </div>
  )
}

export default TodoList;