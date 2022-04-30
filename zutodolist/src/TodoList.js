import React from "react";
import { useState } from "react";
import useTodoStore from "./useTodoStore";

function TodoList() {
  const [todoValue, setTodoValue] = useState("");
  const { todos, addTodo, deleteTodo, modifiedTodo, doneTodo } = useTodoStore(
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
                  <span style={{
                    color: todo.doneTodo ? "#eee" : "#000"
                  }}>
                    {todo.text}
                  </span>
                  <div style={
                      {
                        display: todo.modified ? "block" : "none"
                      }
                    }>
                    <input type="text" />
                    <button>✍️</button>
                  </div>
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                  <button onClick={() => doneTodo(todo.id)}>Done!</button>
                  <button onClick={() => modifiedTodo(todo.id)}>Modified</button>
                </li>
              )
            })}
          </ul>
      </div>
  )
}

export default TodoList;