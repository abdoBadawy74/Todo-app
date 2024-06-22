// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TodoApp from "./Components/TodoApp.tsx";
import ZustandTodoApp from './Components/ZustandTodoApp.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/redux" className="text-blue-500 hover:underline">Todo List (Redux)</Link>
            </li>
            <li>
              <Link to="/zustand" className="text-blue-500 hover:underline">Todo List (Zustand)</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/redux" element={<TodoApp />} />
          <Route path="/zustand" element={<ZustandTodoApp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
