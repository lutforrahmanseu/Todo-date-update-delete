import { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleTodoDateChange = (e) => {
    setTodoDate(e.target.value);
  };

  const addTodo = () => {
    if (todoText !== "" && todoDate !== "") {
      if (editIndex !== null) {
        const updatedTodos = todos.map((todo, index) => {
          if (index === editIndex) {
            return { text: todoText, date: todoDate };
          }
          return todo;
        });
        setTodos(updatedTodos);
        setEditIndex(null);
        setTodoText("");
        setTodoDate("");
      } else {
        const newTodo = { text: todoText, date: todoDate };
        setTodos([...todos, newTodo]);
        setTodoText("");
        setTodoDate("");
      }
    } else {
      alert("Please enter both Todo and Date.");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    const selectedTodo = todos[index];
    setTodoText(selectedTodo.text);
    setTodoDate(selectedTodo.date);
    setEditIndex(index);
  };

  return (
    <>
      <div className="text-center mt-5">
        <h1 className="text-5xl font-bold text-slate-600">Todo App</h1>
        <div className="container flex justify-center items-center space-x-10 mt-5 ">
          <input
            value={todoText}
            onChange={handleTodoTextChange}
            type="text"
            placeholder="Enter Todo here"
            className="px-5  outline-none border-[1px] border-stone-400 rounded-md text-2xl "
          />
          <input
            value={todoDate}
            onChange={handleTodoDateChange}
            type="date"
            className="px-5  outline-none border-[1px] border-stone-400 rounded-md text-2xl"
          />
          <button
            className="text-3xl  bg-green-700 text-white px-7 py-2 font-bold font-sans rounded-md"
            onClick={addTodo}
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>
      </div>
      <Todos todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </>
  );
}

export default App;
