import React from "react";
import { useRef,useState } from "react";
export default function 
TaskInput ({addTask}) {
    const[value,setValue]=useState("");
    const inputRef=useRef(null);

    function handleAdd() {
        addTask(value);
        setValue("");
        inputRef.current.focus();
    }
    return (
        <div>
            <input
            ref={inputRef}
            value={value}
            onChange={(e) => 
            setValue(e.target.value)}
            placeholder="Enter new task"
            />
            <button onClick={handleAdd}>Add Task</button>

        </div>
    );
}