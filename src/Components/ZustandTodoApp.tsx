import React, { useState, useCallback } from "react";
import useTodoStore from "../store/useTodoStore";
import TodoItem from "./TodoItem";

const ZustandTodoApp: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo } = useTodoStore();
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleAddTodo = useCallback(() => {
    if (newTodo.trim() === "") {
      setError("Todo cannot be empty");
      return;
    }
    addTodo({
      id: Date.now(),
      text: newTodo,
      completed: false,
    });
    setNewTodo("");
    setError(null);
  }, [newTodo, addTodo]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todo List (Zustand)</h1>
      <input
        className="border p-2 mb-4 w-full"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new todo"
        aria-label="New Todo"
      />
      <button
        className="bg-blue-500 text-white p-2 mb-4 w-full"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
      {error && <div className="text-red-500 mb-4">{error}</div>}
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
