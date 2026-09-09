import React from 'react'

<<<<<<< HEAD
const Student = (props) => {
     const {id,name,marks,section}=props;
    return (
      <tr >
        <td >{id}</td>
        <td >{name}</td>
        <td>{marks}</td>
        <td>{section}</td>
      </tr>
  )
=======
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
>>>>>>> 5151341eeabea143da723c4d31779e2288c38925
}

export default Student