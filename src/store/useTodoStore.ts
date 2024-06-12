// src/store/useTodoStore.ts
import create from "zustand";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void;
}

const useTodoStore = create<TodoState>((set) => ({
  todos: JSON.parse(localStorage.getItem("zustandTodos") || "[]"),
  addTodo: (text: string) =>
    set((state) => {
      const newTodo = { id: Date.now(), text, completed: false };
      const updatedTodos = [...state.todos, newTodo];
      localStorage.setItem("zustandTodos", JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    }),
  toggleTodo: (id: number) =>
    set((state) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem("zustandTodos", JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    }),
  deleteTodo: (id: number) =>
    set((state) => {
      const updatedTodos = state.todos.filter((todo) => todo.id !== id);
      localStorage.setItem("zustandTodos", JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    }),
  editTodo: (id: number, text: string) =>
    set((state) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      );
      localStorage.setItem("zustandTodos", JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    }),
}));

export default useTodoStore;
