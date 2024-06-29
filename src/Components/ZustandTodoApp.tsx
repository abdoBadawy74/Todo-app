import React from "react";
import useTodoStore from "../store/useTodoStore";
import TodoAppTemplate from "./TodoAppTemplate";

const ZustandTodoApp: React.FC = () => {
  const {
    todos = [],
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
  } = useTodoStore();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todo List (Zustand)</h1>
      <TodoAppTemplate
        todos={todos}
        addTodo={addTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default ZustandTodoApp;
