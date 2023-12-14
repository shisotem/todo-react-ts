import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the page from reloading
    const newTodo: Todo = { inputValue, id: Math.random(), checked: false };
    setTodos([...todos, newTodo]);
    setInputValue("");
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
      </div>
    </>
  );
}

export default App;
