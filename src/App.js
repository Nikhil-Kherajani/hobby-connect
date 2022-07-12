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

function App(){


    // return <Navbar />;
    return (
    <>
        <Greeting/>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="Explore" element={<Explore/>} />
            <Route path="User" element={<User />} />
        </Routes>
    </>);

}

export default App;