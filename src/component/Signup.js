import React from "react";
import Button from "./Button";
import "./Signup.css";
const Signup = ({ handleLogin }) => {
  const btnclick = () => {
    alert("btn clicked");
  };
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <h5>It's quick and easy.</h5>
      <form>
        <div className="input_field">
          <label>FirstName : </label>
          <input type="text" placeholder="Enter firstname" />
        </div>

        <div className="input_field">
          <label>LastName : </label>
          <input type="text" placeholder="Enter lastname" />
        </div>

        <div className="input_field">
          <label>Email : </label>
          <input type="email" placeholder="Enter  email" />
        </div>

        <div className="input_field">
          <label>Password : </label>
          <input type="password" placeholder="Enter  password" />
        </div>
        <Button name="SIGNUP" btnclick={btnclick} />
      </form>
      <p>
        Back to <small onClick={handleLogin}>Login</small>
      </p>
    </div>
  );
};
export default Signup;
