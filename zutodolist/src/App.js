import React from "react";
import TodoList from "./componets/TodoList";
import TodoInsert from "./componets/TodoInsert";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList />
      <TodoInsert />
    </div>
  );
}

export default App;
