import React from 'react'

const Student = ({ id, name, marks, section }) => {

    const heading = {
        color: 'yellow'
    };

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{marks}</td>
            <td>{section}</td>
        </tr>
    )
}

export default Student