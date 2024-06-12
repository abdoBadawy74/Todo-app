// src/components/TodoApp.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addTodo, toggleTodo, deleteTodo, editTodo } from "../redux/todoSlice";
import TodoItem from "./TodoItem";

const TodoApp: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List (Redux)</h1>
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
            toggleTodo={() => dispatch(toggleTodo(todo.id))}
            deleteTodo={() => dispatch(deleteTodo(todo.id))}
            editTodo={(text) => dispatch(editTodo({ id: todo.id, text }))}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
