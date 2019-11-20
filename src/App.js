import React from "react";
import "./App.css";
import Logo from "./DisplayComponents/Logo";
import DateInput from "./Components/DateInput";
import Photo from "./Components/Photo";

function App() {
  return (
    <div className="App">
     <h1><Logo/>Nasa's Astronomy Photo of the Day!!!</h1>
     <DateInput/>
     <Photo/>
    </div>
  );
}

export default App;
