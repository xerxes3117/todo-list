import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>My Todo List</h1>
        </header>
        <main>
          <TodoList />
        </main>
        <footer>
          Created by <a href="https://github.com/xerxes3117">xerxes3117</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
