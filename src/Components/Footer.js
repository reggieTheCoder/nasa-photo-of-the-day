import React from "react";
import SubmittedOn from "./SubmittedOn";
import PhotographedBy from "./PhotographedBy";
import styled from "styled-components"

const FooterText = styled.p`
    text-align: left;
    padding: 2%;
`;


const Footer = (props) => {
    return ( 
        <div style={{"display": "flex"}}>
             <FooterText>Site designed by Reginald Alford</FooterText>
            <SubmittedOn />
            <PhotographedBy />

        </div>
           
    )
}

export default Footer;