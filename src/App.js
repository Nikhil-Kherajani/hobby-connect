import './App.css';
import Greeting from './components/greeting/Greeting';
import Navbar from './components/navbar/Navbar';
// import Navbar from './components/Navbar/Navbar';
import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import User from './pages/User/User';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { auth } from './firebase';
import React,{useState} from 'react';

function App(){

    const [user , setuser] = useState(null)

    auth.onAuthStateChanged(user=>{
        if(user) setuser(user)
        else setuser(null)
    } , [])


    // return <Navbar />;
    return (
    <>
        <Greeting/>
        
        <Navbar user = {user}/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Explore" element={<Explore/>} />
            <Route path="User" element={<User user = {user}/>} />
            <Route path="Login" element={<Login/>} />
            <Route path="Signup" element={<Signup/>} />
        </Routes>
    </>);

}

export default App;