// src/App.tsx
import React from "react";
import TodoApp from './Components/TodoApp';
import ZustandTodoApp from './Components/ZustandTodoApp';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <TodoApp />

      <p style={{height:"5px",width:"100%",margin:"50px 0", background:"black"}}></p>
      <ZustandTodoApp />
    </div>
  );
};

export default App;
