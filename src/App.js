import React, { useState, useEffect } from "react";
import "./App.css";
import Logo from "./DisplayComponents/Logo";
import DateInput from "./Components/DateInput";
import Photo from "./Components/Photo";
import Title from "./Components/Title";
import Description from "./Components/Description";
import axios from "axios";



function App(props) {

  // set state 
  const [date, setDate] = useState("")
  const [photo, setPhoto] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

 const newDate = (e) => {
   e.preventDefault();
   let dateSubmitted = e.target[0].value;
   setDate({date: dateSubmitted});
   console.log(dateSubmitted);
 };

 useEffect(() => {
   axios
   .get ('https://api.nasa.gov/planetary/apod?api_key=N0bALp0VG92Sf7WW4e2zWh9Lq96rNLJbucYHiHal')
   .then(data => {
     console.log(data.data);
     setPhoto(data.data.hdurl);
   });
 },[]);
 

 useEffect(() => {
  axios
  .get ('https://api.nasa.gov/planetary/apod?api_key=N0bALp0VG92Sf7WW4e2zWh9Lq96rNLJbucYHiHal')
  .then(data => {
    setTitle(data.data.title);
  });
},[]);

useEffect(() => {
  axios
  .get ('https://api.nasa.gov/planetary/apod?api_key=N0bALp0VG92Sf7WW4e2zWh9Lq96rNLJbucYHiHal')
  .then(data => {
    setDescription(data.data.explanation);
  });
},[]);

  return (
    <div className="App">
     <h1><Logo/>Nasa's Astronomy Photo of the Day!!!</h1>
     <DateInput newDate = { newDate}/>
     <Title title={title}/>
     <Photo photo={photo}/>
     <Description description={description}/>
    </div>
  );
}

export default App;
