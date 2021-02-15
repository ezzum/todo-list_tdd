import React from "react";

export default function Input({ newTodo, value }) {
  return (
    <input value={value} type="text" onChange={(event) => newTodo(event)} />
  );
}
