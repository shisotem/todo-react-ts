import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the page from reloading
    const newTodo: Todo = { inputValue, id: Math.random(), checked: false };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleChecked = (id: number, Checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !Checked;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <div>
        <h2>Todo with React & TS</h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              handleChange(e);
            }}
            className=""
          />
          <input type="submit" value="Add" className="" />
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                value={todo.inputValue}
                onChange={(e) => {
                  handleEdit(todo.id, e.target.value);
                }}
                disabled={todo.checked}
                className=""
              />
              <input
                type="checkbox"
                onChange={() => {
                  handleChecked(todo.id, todo.checked);
                }}
              />
              <button onClick={() => handleDelete(todo.id)}>Del</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
