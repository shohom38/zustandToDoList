import create from "zustand";
import { v4 as uuidv4 } from "uuid";

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (todoText) => set((state) => ({
      todos: [
      ...state.todos,
      {
        text: todoText,
        id: uuidv4(`${todoText} - ${state.todos.length}`),
        isDone: false,
        modified: false,
      }
    ]
  })),
  deleteTodo: (todoId) => 
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId)
    })),
    
  modifiedTodo: (todoId) =>
  set((state) => ({
    todos: state.todos.map((todo) => {
      if(todo.id === todoId) {
        return {
          modified: true
        };
      }

      return todo;
    })
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
  })),
}))

export default useTodoStore;