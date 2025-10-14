import React from "react";

function StudentsList({students,ToggleStudents,DeleteStudents}){
    return 
    <ul>
        {students.map((students)=>(
           <StudentItem
           key={students.id}
           students={students}
           ToggleStudents={ToggleStudents}
           DeleteStudents={DeleteStudents}
           />
           
        ))
        }
    </ul>
}
