import React, { useState, useEffect } from "react";
import axios from "axios";
 import styled from "styled-components";

import Logo from "../DisplayComponents/Logo";
import Header from "./Header";
import Photo from "./Photo";
import Description from "./Description";
import SubmittedOn from "./SubmittedOn"
import PhotographedBy from "./PhotographedBy";
import Footer from "./Footer";

const Function = styled.div`
  text-align: center;
`;


function Presentation(props) {
    const [apiData, setApiData] = useState('');
    useEffect(() => {
      axios
        .get ('https://api.nasa.gov/planetary/apod?api_key=N0bALp0VG92Sf7WW4e2zWh9Lq96rNLJbucYHiHal')
        .then(response => {
          // reference setState fn
          console.log(response);
          setApiData(response);
        })
        .catch(error => console.log("Error!", error));
    }, []);   

    if (!apiData) return <h1 className="loading">Loading...</h1>

    return(
        
        <div>
            <Logo />
            <Header />
            <Photo photo={apiData.data.hdurl} title={apiData.data.title} />
            <Description description={apiData.data.explanation} />
            <SubmittedOn  date={apiData.data.date}/>
            <PhotographedBy photographer={apiData.data.copyright} />
            <Footer />
        </div>
        
        
        
    )
}




export default Presentation;