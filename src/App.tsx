import React, { useState } from 'react';
import { NavBar } from './Components/navBar';
import { TodoForm } from './Components/TodoForm';
import { TodoList } from './Components/todoList';
import { ITodo } from './interfaces';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      compleated: false
    }
    setTodos(pervState => [newTodo, ...pervState])
  }

  const toggleHandler = (id: number) => {
    setTodos(perv => perv.map(todo => {
      if (todo.id === id) {
        todo.compleated = !todo.compleated
      }
      return todo
    })
    )
  }

  const removeHandler = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler} />
      </div>

    </>
  );
}

export default App;
