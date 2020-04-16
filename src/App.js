import React from "react";
import "./App.css";
import Presentation from './Components/Presentation'
import styled from "styled-components";


const Application = styled.div`
 text-align: center;
`;

function App() {
  return (
    <div className="App">
     {/* <h1><Logo/>Nasa's Astronomy Photo of the Day!!!</h1> */}
     <Presentation /> 
    </div>
  );
}

export default App;
