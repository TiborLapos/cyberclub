import React from "react";
//import './Nav.css';
import Navbar from "./Navigation/Navbar";
const OtherComponent = React.lazy(() => import('./Navigation/Nav.css'));


function App() {
  return (
    <Navbar />
  
  );
}

export default App;
