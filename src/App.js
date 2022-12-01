// import react from "react";
import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const getJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        setJoke(data[1].setup + " ... " + data.punchLine);
      });
  };

  return (
    <div>
      Hellow Youtube<button onClick={getJoke}>Get Joke Right Now</button>
      {joke}
    </div>
  );
}

export default App;
