import { useState } from "react";
import { useTodoStore } from "./TodoStore";

function TodoList() {
    const [todoValue, setTodoValue] = useState("");
    const { todos, addTodo, deleteTodo } = useTodoStore(
        (state) => state
    );
    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(todoValue);
        setTodoValue("");
    }
}

export default TodoList;