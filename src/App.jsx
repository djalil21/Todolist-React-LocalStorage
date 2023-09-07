import { useEffect, useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import "./App.css"

function App() {
  const [todos, setTodos] = useState(()=>{
    const local =localStorage.getItem("ITEMS")
    if(local == null) return []

    return JSON.parse(local)
  });

  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])

  useEffect(()=>{
    console.table(todos)
  },[todos])

  function addTodo(content) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), content, completed: false },
      ];
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo
      });
    });
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
