import React, {useState} from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e){
        setNewTask(e.target.value);
    }
    
    function addTask(){
        if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(<div className="to-do-list">
        <h1>To-Do List</h1>
        <div className="input-wrapper">
            <input type="text" value={newTask} placeholder="Add Task" onChange={handleInputChange}/>

            <button className="add-button" onClick={addTask}>✔️</button>
        </div>

        <ol>
            {tasks.map((task, index) => (
                <li key={index}>
                <span className="text">{task}</span>

                <button
                    className="move-button"
                    onClick={() => moveTaskUp(index)}
                    disabled={index === 0}>⏫</button>

                <button
                    className="move-button"
                    onClick={() => moveTaskDown(index)}
                    disabled={index === tasks.length - 1}>⏬</button>

                <button 
                    className="delete-button" 
                    onClick={() => deleteTask(index)}>🗑️</button>
                </li>
            ))}
        </ol>
    </div>);
}

export default ToDoList