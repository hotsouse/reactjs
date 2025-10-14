import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentsList from './StudentsList'
import AddStudentList from './AddStudent'
import FormikForm from './FormikForm'

function App() {
  const[students,setStudents]=useState(()=>
  {
    const saved=localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  const ToggleStudents=useCallback((id)=>{
    setStudents((prev)=>
    prev.map((students)=>
      students.id===id ? {...students, added:!studentsadded}:students));
  },[]);

  const DeleteStudents=useCallback((id)=>{
    setStudents((prev)=>
      prev.filter((students)=>
      task.id=!id));

    },[]);
  return(
    <div classname="students">
      <h1>Students List</h1>
      <studentsInput addStudents={addStudents}/>
  

    <StudentsList
      ToggleStudents={ToggleStudents}
      DeleteStudents={DeleteStudents}
      />
    </div>
    );
    

const[count,setCount]=useState(0)
return(
  <>
  <h1 style={{textAllign:center,fontweight:bold}}>Students List</h1>
  <FormikForm/>
  </>
)
}
export default App
