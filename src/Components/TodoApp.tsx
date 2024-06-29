import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addTodo, toggleTodo, deleteTodo, editTodo } from "../redux/todoSlice";
import TodoItem from "./TodoItem";

const TodoApp: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleAddTodo = useCallback(() => {
    if (newTodo.trim() === "") {
      setError("Todo cannot be empty");
      return;
    }
    dispatch(
      addTodo({
        id: Date.now(),
        text: newTodo,
        completed: false,
      })
    );
    setNewTodo("");
    setError(null);
  }, [newTodo, dispatch]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todo List (Redux)</h1>
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
