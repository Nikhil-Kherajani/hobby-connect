import React,{useState} from 'react'
import './Joke.css'

export default function Joke() {

    

    async function getJock() {
    const jokeData = await fetch("https://icanhazdadjoke.com/", {
        headers: {
        Accept: "application/json"
        }
    });
    let jokeObj1 = await jokeData.json();
    setjokeObj(jokeObj1);
    
    console.log(jokeData);
    console.log(jokeObj);
    }
    let [jokeObj, setjokeObj] = useState({});

  return (
    <>
        <body>
  <section>
      <h1 className="title center container ">Just a Random Joke </h1>
      <div className="container2 center container">
        <div className="joke">
          <p>{jokeObj.joke}</p>
        </div>
        <button onClick={() => {getJock()}}>Get a Joke</button>
      </div>
      </section>

</body>
    </>
  )
}
