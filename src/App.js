import { useState } from "react";
import Login from "./component/Login";
import Signup from "./component/Signup";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(false);
  };
  const handleLogin = () => {
    setShow(true);
  };
  return (
    <div className="App">
      {show ? (
        <Login handleClick={handleClick} />
      ) : (
        <Signup handleLogin={handleLogin} />
      )}
    </div>
  );
}
