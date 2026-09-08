import React from 'react';

const Student = (props) => {
    return (
        <div>
            <h2>Student Details</h2>
            <p>ID: {props.id}</p>
            <p>Name: {props.name}</p>
            <p>Marks: {props.marks}</p>
            <p>Section: {props.section}</p>
        </div>
    );
};

export default Student;