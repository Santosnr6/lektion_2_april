import TodoList from "./components/TodoList"
import todos from './assets/todos.json';
import AddForm from "./components/AddForm";
import Counter from "./components/Counter";
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([...todos]);
  const [input, setInput] = useState('');

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const handleNewTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      task : input,
      done : false
    }
    setTodoList(t => [...t, newTodo]);
  }

  const handleTodoClick = (index) => {
    const newTodoList = [...todoList]; 
    newTodoList[index].done = !newTodoList[index].done;
    setTodoList(newTodoList); 
  }

  return (
    <section className="app">
      <h1>My Todo App</h1>
      <AddForm 
        handleNewTodo={ handleNewTodo }
        handleInput={ handleInput }
      />
      <TodoList 
        todoList={ todoList } 
        handleClick={ handleTodoClick }
      />
      <Counter />
    </section>
  )
}

export default App
