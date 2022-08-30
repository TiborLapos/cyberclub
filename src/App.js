import React from "react";
//import './Nav.css';
import Navbar from "./Navbar";
const OtherComponent = React.lazy(() => import('./Nav.css'));


function App() {
  return (
    <Navbar />
  
  );
}

export default App;
