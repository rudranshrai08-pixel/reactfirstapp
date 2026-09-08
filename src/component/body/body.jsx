import React from 'react';
import Student from './Student.jsx';

const Body = () => {
    return (
        <div>
            <h1>Welcome to the Body Component</h1>

            <Student
                id={1}
                name="Rudransh"
                marks={85}
                section="C"
            />
        </div>
    );
};

export default Body;