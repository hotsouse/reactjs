import React, { useState,useEffect,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

export default function App() {
  const [tasks,setTasks]=useState(()=>
  {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved):[];
  });
  const [filter,setFilter]=useState("all");
  useEffect (()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));},[tasks]);
    const addTask=useCallback((text)=>{
      if (!text.trim()) return;
      setTasks((prev)=>[...prev,{id:Date.now(),text,completed:false}]);
    },[]);

    const toggleTask=useCallback((id)=>{
      setTasks((prev)=>
      prev.map((task)=>
      task.id===id?{...task,completed:!task.completed}:task)
    );
    },[]);

    const deleteTask=useCallback((id)=>{
      setTasks((prev)=>
        prev.filter((task)=>
        task.id!==id)
    );
    },[]);
    
    const filteredTasks=tasks.filter((task)=>{
    if (filter==="active") return !task.completed;
    if (filter==="completed") return task.completed;
    return true;
    });
      
    

    const completedCount=tasks.filter((t)=> t.completed).length;
    return (
      <div className="app">
        <h1>ToDo List</h1>
        <TaskInput addTask={addTask}/>
        <div className="filters">
          <button onClick={()=> setFilter("all")}>All</button>
          <button onClick={()=> setFilter("active")}>Active</button>
          <button onClick={()=> setFilter("completed")}>Completed</button>
          
        </div>
        <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        />
        <p>
          Total: {tasks.length} | Completed:{completedCount}
        </p>

        
      </div>
    );
  
  
}