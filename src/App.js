import "./App.css";
import Input from "./input/input";
import Todos from "./todos/todos";
import AddButton from "./add-button/add-button";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1 className="title">Todo list</h1>
      <div>
        <Input />
        <AddButton />
      </div>
      <Todos />
    </div>
  );
}

export default App;
