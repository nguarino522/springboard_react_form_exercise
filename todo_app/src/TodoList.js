import React, { useState } from 'react';
import './TodoList.css';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]); 

    const createTodo = (newTodo) => {
        setTodos(todos => [...todos, newTodo]);
    }

    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
        console.log('fucking work')
    }

    return (
        <div className="TodoList">
            <div className="TodoList-form-section">
                <NewTodoForm createTodo={createTodo}/>
            </div>
            <div className="TodoList-task-section">
                <ul>
                    {todos.map( ({id, task}) => {
                        return <Todo key={id} id={id} task={task} removeTodo={removeTodo}/>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TodoList;
