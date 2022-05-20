import React from "react";
import { useState } from "react";
import useTodoStore from "../store/useTodoStore";

function TodoList() {
  const [todoValue, setTodoValue] = useState("");
  // const [newText, setNewText] = useState("");
  const [ insertToggle, setInsertToggle ] = useState(false);
  const { todos, addTodo, deleteTodo, doneTodo } = useTodoStore(
    (state) => state
  );


  const onToggle = () => {
    setInsertToggle(prev => !prev)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(todoValue);
    setTodoValue("");
  };


  const TodoInsert = () => {
    
    return (
      <div>
        <form>
          <input type="text" onChange={(e) => setTodoValue(e.target.value)}/>
          <button>✍️</button>
        </form>
      </div>
    )
  }



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
                    color: todo.isDone ? "#eee" : "#000",
                    display: insertToggle && "none"
                  }}>
                    {todo.text}
                  </span>
                  {/* <div style={
                      {
                        display: todo.modified ? "block" : "none"
                      }
                    }>
                    <input type="text" />
                    <button>✍️</button>
                  </div> */}
                  {insertToggle && <TodoInsert />}
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                  <button onClick={() => doneTodo(todo.id)}>Done!</button>
                  <button onClick={() => onToggle()} style={{
                    display: insertToggle && "none",
                  }}>Modified</button>
                </li>
              )
            })}
          </ul>
      </div>
  )
}

export default TodoList;