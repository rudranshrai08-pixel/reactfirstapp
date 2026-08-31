import React from "react";

const Registration = () => {
  return (
    <div className="container mt-4">

      <h2 className="text-warning mb-4">
        Registration
      </h2>

      <form style={{ width: "400px" }}>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>

      </form>

    </div>
  );
};

export default Registration;