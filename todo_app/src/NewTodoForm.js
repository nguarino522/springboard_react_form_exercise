import React, { useState } from 'react';
import './NewTodoForm.css';
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({createTodo}) => {
    const [task, setTask] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo({task, id: uuid() });
        setTask("");
    }

    return (
        <div className="NewTodoForm">
            <form onSubmit={handleSubmit}>
                <div className="NewTodoForm-section">
                    <label htmlFor="task">Add a task todo: </label>
                    <input type="text" id="task" name="task" onChange={handleChange} value={task} />
                </div>
                <button>Add Entry</button>
            </form>
        </div>
    )
}

export default NewTodoForm;