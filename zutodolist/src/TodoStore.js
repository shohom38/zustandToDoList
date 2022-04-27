import create from "zustand/react";
import { uuid } from "react-uuid";

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (todoText) => set((state) => ({
      todos: [
      ...state.todos,
      {
        text: todoText,
        id: uuid(`${todoText} - ${state.todos.length}`),
        isDone: false
      }
    ]
  })),
  deleteTodo: (todoId) => 
  set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== todoId)
  })),
  doneTodo: (todoId) =>
  set((state) => ({
    todos: state.todos.map((todo) => {
      if(todo.id === todoId) {
        return {
          ...todo,
          isDone: true
        };
      }

      return todo;
    })
  }))
}))

export default useTodoStore;