import React, { useState } from "react";

import "./app.css";
import Input from "./input/input";
import Todos from "./todos/todos";
import AddButton from "./add-button/add-button";

function App() {
  const [todos, setTodos] = useState(["TDD", "SSR", "TypeScript"]);
  const [todosNewItem, setTodosNewItem] = useState("");
  const newTodo = (event) => {
    setTodosNewItem(event.target.value);
  };
  const addTodo = () => {
    if (todosNewItem) {
      setTodos([...todos, todosNewItem]);
      setTodosNewItem("");
    }
    return;
  };
  const deleteTodo = (item) => {
    const newTodos = todos.filter((todo) => todo !== item);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1 className="title">Todo list</h1>
      <div>
        <Input newTodo={newTodo} value={todosNewItem} />
        <AddButton addTodo={addTodo} />
      </div>
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
