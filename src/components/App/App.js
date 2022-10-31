import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import Todos from '../Todos/Todos';
import { getTodos, postTodos, deleteTodoFromServer } from '../../helpers/http'
import { url } from '../../helpers/config'
import { v4 as uuidv4 } from 'uuid'


function App() {

  const  [todos, setTodos] = useState([]);
  const  [inputValue, setInputValue] = useState("");
  const  [validate, setValidate] = useState(true);

  useEffect(() => {
      getTodos(url)
      .then((todos) => setTodos(todos))
      .catch((e) => console.log(e.message))
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value)
  } 

  const getTodoItem = () => {
    getTodos(url)
    .then((todo) => setTodos(todo))
    .catch((e) => console.log(e.message))
  }

  const deleteTodo = (id) => {
    deleteTodoFromServer(url, id)
    .catch((e) => console.log(e.message));
    getTodoItem();
  }

  const handleAddTodo = (event) => {
    if (inputValue.length === 0) {
      setValidate(false);
      return
    } else {
      const newTodo = {
        id: uuidv4(),
        duty: inputValue
      }
      postTodos(url, newTodo)
      .catch((e) => console.log(e.message));
      getTodoItem();
      setValidate(true);
      setInputValue('')
  
    }
  }

  return (
    <Wrapper>
      <Header>
        <Input inputValue={inputValue} handleInputChange={handleInputChange}/>
        {!inputValue && !validate ? <P>Nie można dodać pustego zadania!!!</P> : null}
        <Button onClick={handleAddTodo}>Dodaj</Button>
      </Header>
      <H1>Lista rzeczy do zrobienia: </H1>
      <Todos todos={todos} deleteTodo={deleteTodo}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`

const Header = styled.div`
`

const P = styled.p`
  color: red;
  font-weight: 700;
`

const H1 = styled.h1`
  margin: 20px;
`

const Button = styled.button`
  width: 80px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #a6a4a1;
    transition: background-color .3s;
  }
`

export default App;
