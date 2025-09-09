import { useEffect, useState } from "react";

export default function ToDoList() {
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");

const addTask =() => {
    if (newTask.trim()==="")return;
    setTasks([...tasks,newTask]);
    setNewTask("");
}

useEffect(()=> {
    if (tasks.length>10) {
        alert("You have more than 10 jobs to do!");
    }
},[tasks]);
return (
    <div style={{margin:"20px"}}>
        <h2>ToDo List</h2>
        <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
        />

        <button onClick={addTask}>Add Task</button>

        <ul>
            {tasks.map((task,index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>

    
    </div>
);
}