import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addTodo, toggleTodo, deleteTodo, editTodo } from "../redux/todoSlice";
import TodoAppTemplate from "./TodoAppTemplate";

const TodoApp: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos || []);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todo List (Redux)</h1>
      <TodoAppTemplate
        todos={todos}
        addTodo={(todo) => dispatch(addTodo(todo))}
        toggleTodo={(id) => dispatch(toggleTodo(id))}
        deleteTodo={(id) => dispatch(deleteTodo(id))}
        editTodo={(id, text) => dispatch(editTodo({ id, text }))}
      />
    </div>
  );
};

export default TodoApp;
