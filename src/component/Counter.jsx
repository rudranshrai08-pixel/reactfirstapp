<<<<<<< HEAD
import React, { useState } from "react";

const Counter = (props) => {
  const {id,count,inc,dec}=props;
 
  return (
    <div className="mt-2">
      <button className="btn btn-primary" onClick={()=>dec(id)}>
        -
      </button>
      <b className="bg-warning px-3 py-3 pt-1 pb-2 rounded mx-3 my-3">
        {count}
      </b>
      <button className="btn btn-primary" onClick={()=>inc(id)}>
        +
      </button>
    
=======
import React from 'react';

const Counter = (props) => {
  return (
    <div className="mt-4">

      <h3>
        Counter {props.id}: {props.count}
      </h3>

      <button
        className="btn btn-success me-2"
        onClick={() => props.inc(props.id)}
      >
        +
      </button>

      <button
        className="btn btn-danger me-2"
        onClick={() => props.dec(props.id)}
      >
        −
      </button>

      <button
        className="btn btn-secondary"
        onClick={() => props.reset(props.id)}
      >
        Reset
      </button>

>>>>>>> 5151341eeabea143da723c4d31779e2288c38925
    </div>
  );
};

export default Counter;