import {Link } from "react-router-dom";
import {useState} from 'react';
import Test from "./Test";

function Remotepc() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <div className="App" > 
        <div className="class_table">
            <h1>Active Users</h1>
            {Test()}
        </div>
    </div>
  )}

export default Remotepc;
