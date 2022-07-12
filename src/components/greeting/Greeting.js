import React from 'react'
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Greeting = () => {
    let timeNow = new Date().getHours();
    let greet = timeNow >= 5 && timeNow < 12
    ? "Good Morning"
    : timeNow >= 12 && timeNow < 18
    ? "Good Afternoon"
    : "Good evening";

    const dtoast = (greet)=>{
        toast(`${greet}`);
    }

    return(
        <>
        
        {dtoast(greet)}
        <ToastContainer/>
        </>
    )

}

export default Greeting