import React, { useState } from "react";
import "./App.css";

function Joke(data) {
  console.log(data);

  return (
    <>
      <div className="joke">
        <h1>{data.prop.setup}</h1>
        <h3>{data.prop.punchline}</h3>
      </div>
    </>
  );
}

export default Joke;
