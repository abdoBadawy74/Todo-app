# Todo Application

This project is a simple Todo list application built using Vite, React, TypeScript, and Tailwind CSS. It demonstrates how to use two different state management libraries: Redux Toolkit and Zustand. The project also includes a comparison between using SWC and traditional Babel/TypeScript compilers.

## Features

- Add, edit, and delete todos
- Toggle completion status of todos
- Persist todos using local storage
- Use of Redux Toolkit and Zustand for state management
- SWC vs. Traditional Babel/TypeScript comparison

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abdoBadawy74/Todo-app.git
   cd todo-app
   ```

2. Install dependencies:

```sh
npm install
```
Running the Application
To start the development server:
```sh
npm run dev
```
Open your browser and navigate to http://localhost:3000.


### SWC vs. Traditional Babel/TypeScript:

  This project uses SWC as the JavaScript/TypeScript compiler. Below is a comparison between using SWC and the traditional Babel/TypeScript compilers.

  ## SWC vs. Traditional Babel/TypeScript

| Feature           | SWC (Speedy Web Compiler)                | Traditional Babel/TypeScript         |
| ----------------- | ---------------------------------------- | -----------------------------------  |
| **Performance**   | Faster build times due to Rust implementation. | Slower build times, especially with large codebases. |
| **Modern Features**| Supports latest JavaScript and TypeScript features. | Supports latest JavaScript and TypeScript features. |
| **Tree Shaking**  | Efficient tree shaking capabilities.     | Effective tree shaking with proper configuration. |
| **Maturity**      | Relatively new, with growing adoption.   | Mature and widely adopted.           |
| **Plugin Ecosystem** | Limited plugin ecosystem but growing.  | Extensive and mature plugin ecosystem.|
| **Community Support** | Increasing but smaller community.   | Large and active community.          |
| **Configuration Complexity** | Simple and straightforward.    | Can be complex with multiple plugins.|

### Conclusion

Using SWC in this project provides faster build times and modern JavaScript feature support, making the development experience smoother and more efficient. However, for projects that rely heavily on the extensive plugin ecosystem or require maximum compatibility and community support, sticking with traditional Babel/TypeScript might be beneficial.


### State Management

## Redux Toolkit
The TodoApp component uses Redux Toolkit to manage the state of todos. The state is stored in a Redux store, and actions are dispatched to modify the state.

## Zustand
The ZustandTodoApp component uses Zustand to manage the state of todos. Zustand provides a simpler and more lightweight alternative to Redux.
