import React from 'react';
import './Todo.css';

const Todo = ({ task, id, removeTodo }) => {
    
    const handleDelete = () => removeTodo(id);

    return (
            <li className="Todo">
                <span>{task}</span>
                <button type="button" onClick={handleDelete}>X</button>
            </li>
    )
}

export default Todo;