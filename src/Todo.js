import React from "react"

export default function Todo({ todo, toggleTodo }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => {
            toggleTodo(todo.id)
          }}
        ></input>
        {todo.name}
      </label>
    </div>
  )
}
