import React, { useState, useEffect } from "react";
import "./App.css";
import Logo from "./DisplayComponents/Logo";
// import DateInput from "./Components/DateInput";
// import Photo from "./Components/Photo";
// import Title from "./Components/Title";
// import Description from "./Components/Description";
// import Footer from "./Components/Footer";
import axios from "axios";
import Presentation from './Components/Presentation'




function App(props) {
  const [apiData, setApiData] = useState(null);
  // useEffect(() => {
  //   axios
  //     .get ('https://api.nasa.gov/planetary/apod?api_key=N0bALp0VG92Sf7WW4e2zWh9Lq96rNLJbucYHiHal')
  //     .then(response => {
  //       // reference setState fn
  //       console.log(response);
  //       setApiData(response);
  //     })
  //     .catch(error => console.log("Error!", error));
  // }, []);
   


 




  // const [date, setDate] = useState("")
  // const [photo, setPhoto] = useState("")
  // const [title, setTitle] = useState("")
  // const [description, setDescription] = useState("")
  // const [footer, setFooter] = useState("")
  // const [datePublished, setDatePublished] = useState("")
 

//  const newDate = (e) => {
//    e.preventDefault();
//    let dateSubmitted = e.target[0].value;
//    setDate({date: dateSubmitted});
//  };

 

//  useEffect(() => {
//    axios
//    .get ('https://api.nasa.gov/planetary/apod?api_key=N0bALp0VG92Sf7WW4e2zWh9Lq96rNLJbucYHiHal')
//    .then(data => {
//      setPhoto(data.data.hdurl);
//    });
//  },[]);
 

//  useEffect(() => {
//   axios
//   .get ('https://api.nasa.gov/planetary/apod?api_key=N0bALp0VG92Sf7WW4e2zWh9Lq96rNLJbucYHiHal')
//   .then(data => {
//     setTitle(data.data.title);
//   });
// },[]);

// useEffect(() => {
//   axios
//   .get ('https://api.nasa.gov/planetary/apod?api_key=N0bALp0VG92Sf7WW4e2zWh9Lq96rNLJbucYHiHal')
//   .then(data => {
//     setDescription(data.data.explanation);
//   });
// },[]);

// useEffect(() => {
//   axios
//   .get ('https://api.nasa.gov/planetary/apod?api_key=N0bALp0VG92Sf7WW4e2zWh9Lq96rNLJbucYHiHal')
//   .then(data => {
//     setFooter(data.data.copyright);
//   });
// },[]);

// useEffect(() => {
//   axios
//   .get ('https://api.nasa.gov/planetary/apod?api_key=N0bALp0VG92Sf7WW4e2zWh9Lq96rNLJbucYHiHal')
//   .then(data => {
//     setDatePublished(data.data.date);
//   });
// },[]);