import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
