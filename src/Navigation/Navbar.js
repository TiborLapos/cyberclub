import React from "react";
import { Route, Routes, Link } from "react-router-dom"
import { useCookies } from 'react-cookie'
import Home from "../Default/Home";
import Remotepc from "../Remote_pc/Remotepc";
import Login from "../Login_Register/Login"
import Test1 from "../Default/Test1"
import User from "../Login_Register/User"
import Movies from "../Movies/Movies";
import Create from "../Movies/Create"
import Profile from "../Profile/Profile"
import Getjson from "../Testing/Getjson"


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
            <Link to="/movies">Movies</Link>
            <Link to="/user">Profile</Link>
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
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/create" element={< Create/>} />
                    <Route path="/profile/:id" element={< Profile/>} />
                    <Route path="/user" element={<User />} />
                    <Route path="/getjson" element={<Getjson />} />
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
