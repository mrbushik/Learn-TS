import React, { useState } from 'react'
import { TodoList } from '../todoList';
import { TodoForm } from '../TodoForm';
import { NavBar } from '../navBar';
import { ITodo } from '../../interfaces';


export const ToDoPage: React.FC = () => {
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
        setTodos(prev =>
            prev.map(todo => {
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
    )
}