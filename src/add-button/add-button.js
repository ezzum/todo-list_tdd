import React from "react";

export default function AddButton({ addTodo }) {
  return (
    <button className={"add"} onClick={() => addTodo()}>
      add
    </button>
  );
}
