import React from "react";
import Button from "./Button";
import "./Login.css";
const Login = ({ handleClick }) => {
  const btnclick = () => {
    alert("btn clicked");
  };

  return (
    <div className="container">
      <h1>Welcome!</h1>
      <h5>Log In your account</h5>
      <form>
        <div className="input_field">
          <label>Email : </label>
          <input type="text" placeholder="Enter your email" />
        </div>

        <div className="input_field">
          <label>Password : </label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <Button name="LOGIN" btnclick={btnclick} />
      </form>
      <p>
        Don't have any account ? <bold onClick={handleClick}>SignUp</bold>
      </p>
    </div>
  );
};
export default Login;
