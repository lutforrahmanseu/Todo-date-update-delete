import React from "react";

function Todos({ todos, deleteTodo, editTodo }) {
  console.log(todos);
  return (
    <div className="mt-5 flex justify-center items-center ">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <strong>{todo.text}</strong> - {todo.date} -
            <button
              onClick={() => editTodo(index)}
              className="ml-2 bg-green-700 px-7 py-2  text-xl font-bold text-white rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(index)}
              className="ml-2 bg-red-700 text-xl font-bold  px-7 py-2  text-white rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
