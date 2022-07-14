import React,{useState} from 'react'
import { auth } from '../../firebase'
import {  toast , ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'

export default function Login() {

    // const stoast = (result)=>{
    //     toast.success(`Welcome ${result.user.email}`);
    // }
    // const etoast = (err)=>{
    //     toast.error(`${err}`);
    // }

    const navigate = useNavigate();

    const [email , setemail] = useState('')
    const [password , setpassword] = useState('')
    const handleSubmit = async (e) =>{
        e.preventDefault()
        // console.log(email , password)

        try{
            
            const result = await auth.signInWithEmailAndPassword(email, password)
            // window.M.toast({html: `Welcome ${result.user.email}` , classes: "green"})
            
            toast.success(`Welcome ${result.user.email}`);
            
            
            navigate('/')

        }
        catch(err){
            // window.M.toast({html: err.message , classes: "green"})
            toast.error(`${err}`);
            
            
            

        }

    }
  return (
    <>
    <div><ToastContainer/></div>
    <div className="center container" style={{maxwidth:"500px"}}>
        <h3>Please Login!!</h3>
        
        <form onSubmit={(e) => handleSubmit(e)}>
        
            <div className="input-field">
                <input type ="email" placeholder="email"  onChange={(e)=> setemail(e.target.value)}/>
                <input type ="password" placeholder="password"  onChange={(e)=> setpassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn blue">Login</button>
        </form>
    </div>
    </>
  )
}
