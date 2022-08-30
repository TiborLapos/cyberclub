import React from "react";
import { Route, Routes, Link } from "react-router-dom"
import { useCookies } from 'react-cookie'
import Home from "./Home"
import Test from "./Remote_pc/Test";
import Remotepc from "./Remote_pc/Remotepc";
import Login from "./Login_Register/Login"
import Test1 from "./Test1"
import User from "./Login_Register/User"
const OtherComponent = React.lazy(() => import('./Nav.css'));


function Navbar() {
  const [cookies] = useCookies(["name"]);
  return (
    <>
        {cookies.Name == null &&
            <div className="sidenav">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            </div>}
        {cookies.Name  &&
            <div className="sidenav">
            <Link to="/">Home</Link>
            <Link to="/remotepc">Servers</Link>
            <Link to="/user">Login</Link>
          </div>}
        {(() => {
        if (cookies.Name  == null) {
            //LOGED OUT ROUTES
            return (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={ <Home/> } />
                    <Route path="*" element={<Home/>} />
                </Routes>
            )
        }else{
            //LOGED IN ROUTES
            return (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/remotepc" element={<Remotepc />} />
                    <Route path="/test1" element={<Test1 />} />
                    <Route path="/user" element={<User />} />
                    <Route element={ <Home/> } />
                    <Route path="*" element={<Home/>} />
                </Routes>
            )
        }
        })()}
    </>
  );
}

export default Navbar;