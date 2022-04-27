import { useState } from "react";
import useTodoStore from "./useTodoStore";

function TodoList() {
  const [todoValue, setTodoValue] = useState("");
  const { todos, addTodo, deleteTodo } = useTodoStore(
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
                // value="new-todo"
                onChange={(e) => setTodoValue(e.target.value)}
                name="doSomthing"
              />
              <button type="submit">Add Todo</button>
          </form>
      </div>
  )
}

export default TodoList;