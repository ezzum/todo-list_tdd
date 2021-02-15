import React from "react";

export default function Todos({ todos, deleteTodo }) {
  const todoList = todos.map((item) => {
    return (
      <li key={item} className={"todos-item"}>
        {item}
        <button className={"delete"} onClick={() => deleteTodo(item)}>
          delete
        </button>
      </li>
    );
  });
  return <ul className="todos">{todoList}</ul>;
}
