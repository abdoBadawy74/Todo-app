// src/components/TodoItem.tsx
import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
  editTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center p-2 border-b">
      {isEditing ? (
        <input
          className="flex-1 border rounded py-1 px-2"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span
          className={`flex-1 cursor-pointer ${
            todo.completed ? "line-through" : ""
          }`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </span>
      )}
      <div className="flex items-center space-x-2">
        {isEditing ? (
          <button
            className="bg-green-500 text-white py-1 px-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-yellow-500 text-white py-1 px-2 rounded"
            onClick={handleEdit}
          >
            Edit
          </button>
        )}
        <button
          className="bg-red-500 text-white py-1 px-2 rounded"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
