import React, { useState } from "react";
import "./App.css";
import Logo from "./DisplayComponents/Logo";
import DateInput from "./Components/DateInput";
import Photo from "./Components/Photo";

function App(props) {

  // set state 
  const [date, setDate] = useState("")
  const [photo, setPhoto] = useState("")

 const newDate = (e) => {
   e.preventDefault();
   let dateSubmitted = e.target[0].value;
   setDate({date: dateSubmitted});
   console.log(e.target);
 };


  return (
    <div className="App">
     <h1><Logo/>Nasa's Astronomy Photo of the Day!!!</h1>
     <DateInput newDate = { newDate}/>
     <Photo/>
    </div>
  );
}

export default App;
