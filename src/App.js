import React, { useEffect, useState } from 'react';
import './App.css';
// import { getTodos } from './http'

function App() {

  const  [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/todos")
    .then((response) => response.json())
    .then((todos) => {
      setTodos(todos)
      console.log(todos)
    })
    .catch((e) => console.log(e.message))
  }, []);


  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.duty}</li>
        )) ?? null}
      </ul>
    </div>
  );
}

export default App;
