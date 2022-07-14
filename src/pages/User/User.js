import React , {useState , useEffect} from "react";
import { db } from "../../firebase";

function User ({user}){

   
    useEffect(() => {
        //Runs only on the first render
      
    
        if(user){
        const docref = db.collection('user').doc(user.uid)
        docref.onSnapshot(docSnap =>{
            if(docSnap.exists){
                // nk = 1;
                // console.log("nk ki value")
                // console.log(nk)
                setshowdata( docSnap.data().userinfo)
                console.log(showdata) 
            }
            else{
                console.log("no docs");
            }
        })
       

    }
}, []);

    // showdata2();

    const adduserinfo = () => {
        userinfo = [username , hobby , hobby2 , age]
        console.log(userinfo)
        console.log(userinfo[0])
        console.log(userinfo[1])
        db.collection('user').doc(user.uid).set({userinfo: [username , hobby , hobby2 , age]})
        
    }

    // const addhobby = () => {
    //     db.collection('user').doc(user.uid).set({hobby: hobby})
    // }
    // const addusername = () => {
    //     db.collection('user').doc(user.uid).set({name: username})
    // }


    let [userinfo, setuserinfo] = useState([]);
    const [hobby , sethobby] = useState('');
    const [hobby2 , sethobby2] = useState('');
    const [age , setage] = useState('');
    const [username , setusername] = useState('');
    let [showdata, setshowdata] = useState(['']);

    


    return(
        <>
        {console.log(showdata)}
        
        {showdata!=''?<>

        <div  className="center container">
        <ul className="collection with-header">
        <li className="collection-header"><h4>{showdata[0]}</h4></li>
        <li className="collection-item">Hobby :-  {showdata[1]} </li>
        <li className="collection-item">Second Hobby :-  {showdata[2]}</li>
        <li className="collection-item">Age :-  {showdata[3]}</li>
        
      </ul>
      </div>
        
        </>
        :
        <>
        <h3 className = "center container">Please add your basic details !</h3>
        <div className="input-field center container" style={{maxwidth:"500px"}}>
            <input type="text" placeholder = "Enter your name" value={username} onChange = {(e) => setusername(e.target.value)}/>
            
            <input type="text" placeholder = "Enter your interest / Hobby" value={hobby} onChange = {(e) => sethobby(e.target.value)}/>

            <input type="text" placeholder = "Enter your 2nd interest / Hobby" value={hobby2} onChange = {(e) => sethobby2(e.target.value)}/>

            <input type="number" placeholder = "Enter your age" value={age} onChange = {(e) => setage(e.target.value)} min="16" max="65"/>


            <button className="btn blue" onClick = {()=> adduserinfo()}>Add</button>

        </div>

        
        </>}
        

        </>
    );
}

export default User