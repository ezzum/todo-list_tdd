import React from "react";

export default function AddButton({ addTodo }) {
  return <button onClick={() => addTodo()}>add</button>;
}
