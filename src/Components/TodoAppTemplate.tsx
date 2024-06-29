import React, { useState, useCallback } from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoAppTemplateProps {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void;
}

const TodoAppTemplate: React.FC<TodoAppTemplateProps> = ({ todos = [], addTodo, toggleTodo, deleteTodo, editTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleAddTodo = useCallback(() => {
    if (newTodo.trim() === '') {
      setError('Todo cannot be empty');
      return;
    }
    addTodo({
      id: Date.now(),
      text: newTodo,
      completed: false
    });
    setNewTodo('');
    setError(null);
  }, [newTodo, addTodo]);

  return (
    <div>
      <input
        className="border p-2 mb-4 w-full"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new todo"
        aria-label="New Todo"
      />
      <button className="bg-blue-500 text-white p-2 mb-4 w-full" onClick={handleAddTodo}>
        Add Todo
      </button>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <ul>
        {todos.map(todo => (
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

export default TodoAppTemplate;
