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

    </div>
  );
};

export default Counter;