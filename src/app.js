import React, { useState } from "react";

import "./app.css";
import Input from "./input/input";
import Todos from "./todos/todos";
import AddButton from "./add-button/add-button";

function App() {
  const [todos, setTodos] = useState(["TDD", "SSR", "TypeScript"]);
  const newTodo = () => {
    console.log("new Todo!");
  };
  return (
    <div className="App">
      <h1 className="title">Todo list</h1>
      <div>
        <Input newTodo={newTodo} />
        <AddButton />
      </div>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
