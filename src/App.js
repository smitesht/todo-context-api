import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoItemForm from "./components/TodoItemForm";
import TodoItems from "./components/TodoItems";
import { TodoListProvider } from "./context/TodoListProvider";

function App() {
  return (
    <div className="wrapper">
      <main className="main-wrapper">
        <TodoListProvider>
          <Header />
          <TodoItemForm />
          <TodoItems />
        </TodoListProvider>
      </main>
    </div>
  );
}

export default App;
