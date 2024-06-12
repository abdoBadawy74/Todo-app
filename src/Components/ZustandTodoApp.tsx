// src/components/ZustandTodoApp.tsx
import React, { useState } from "react";
import useTodoStore from "../store/useTodoStore";
import TodoItem from "./TodoItem";

const ZustandTodoApp: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo } = useTodoStore();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    addTodo(newTodo);
    setNewTodo("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List (Zustand)</h1>
      <div className="mb-4">
        <input
          type="text"
          className="border rounded w-full py-2 px-3"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new todo (Press Enter to add)"
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-2 mx-auto block"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={() => toggleTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
            editTodo={(text) => editTodo(todo.id, text)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ZustandTodoApp;

