import React from "react";

export default function Input({ newTodo }) {
  return <input type="text" onChange={() => newTodo()} />;
}
