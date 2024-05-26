import React, { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [newTodo, setNewTodo] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        setTasks(prevTasks => {
            return [
                ...prevTasks,
                {
                    id: Date.now(),
                    name: newTodo,
                    completed: false
                }
            ];
        });
        setNewTodo(""); // Clear the input field
    };

    const handleDelete = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    const handleComplete = (id) => {
        setTasks(prevTasks => prevTasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: true };
            }
            return task;
        }));
    };

    return (
        <div className="list">
            <h4>List</h4>
            <form className="search">
                <input type='text' placeholder='Search List'></input>
                <button type="submit" className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            <div className="list-item-div">
                {
                    tasks.map(task => (
                        <section key={task.id} className={`list-item ${task.completed ? 'completed' : ''}`}>
                            <div className='list-component'>
                                <input
                                    type='checkbox'
                                    onChange={() => handleComplete(task.id)}
                                    checked={task.completed}
                                    disabled={task.completed}
                                />
                                <p>{task.name}</p>
                            </div>
                            <button onClick={() => handleDelete(task.id)}><MdDeleteForever /></button>
                        </section>
                    ))
                }

                <h4 className='add-new-todo'>Add New Todo...</h4>
            </div>

            <form className='new-list' onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={newTodo}
                    placeholder='Input New Todo List'
                    onChange={e => setNewTodo(e.target.value)}
                />
                <section className='submit-btn-submit'>
                    <button className='submit-btn'>Submit</button>
                </section>
            </form>
        </div>
    );
}

export default Home;
