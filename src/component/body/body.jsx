<<<<<<< HEAD
import React, { useState } from "react";
import Student from "./Student";

const Body = () => {
  const [studentInfo, setStudentInfo] = useState([
    { id: 1, name: "Student 1", marks: 90, class: "MCA-C" },
    { id: 2, name: "Student 2", marks: 45, class: "MCA-C" },
    { id: 3, name: "Student 3", marks: 70, class: "MCA-A" },
    { id: 4, name: "Student 4", marks: 86, class: "MCA-C" },
    { id: 5, name: "Student 5", marks: 93, class: "MCA-D" },
    { id: 6, name: "Student 6", marks: 93, class: "MCA-D" }
  ]);
  return (
    <div>
       <h2 className="bg-warning text-center">Student Information</h2>
      <table className="table table-hover">
          <thead className="table-dark">
          <tr><th>ID</th><th>Name</th><th>Marks</th><th>Section</th></tr>
        </thead>
        <tbody className="table-success">
          {studentInfo.map(
            (row)=>(
            <Student 
              key={row.id}
              id={row.id} 
              name={row.name} 
              marks={row.marks}
              section={row.class}      />)
          )}
      
      </tbody>
      </table>
     
    </div>
  );
};

export default Body;
=======
import React, { useState } from 'react'
import Student from './Student'

const Body = () => {
    const [studentInfo, setstudentInfo] = useState([
        { id: 1, name: "Student1", marks: 90, class: "MCA-C" },
        { id: 2, name: "Student2", marks: 45, class: "MCA-C" },
        { id: 3, name: "Student3", marks: 70, class: "MCA-C" },
        { id: 4, name: "Student4", marks: 86, class: "MCA-C" },
        { id: 5, name: "Student5", marks: 93, class: "MCA-C" },
    ]);

    return (
        <div>
            <h2>Welcome to React JS First Home Page</h2>

            <table>
                <thead>
                    <tr>
                        <th colSpan="4">Student Information</th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Section</th>
                    </tr>
                </thead>

                <tbody>
                    <Student
                        id={studentInfo[0].id}
                        name={studentInfo[0].name}
                        marks={studentInfo[0].marks}
                        section={studentInfo[0].class}
                    />

                    <Student
                        id={studentInfo[1].id}
                        name={studentInfo[1].name}
                        marks={studentInfo[1].marks}
                        section={studentInfo[1].class}
                    />
                </tbody>
            </table>
        </div>
    )
}

export default Body
>>>>>>> 5151341eeabea143da723c4d31779e2288c38925
