import React from "react";
import "./Button.css";
const Button = ({ name, btnclick }) => {
  return (
    <div className="btn">
      <button onClick={btnclick}>{name}</button>
    </div>
  );
};
export default Button;
