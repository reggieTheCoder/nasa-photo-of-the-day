import React from "react";
import styled from "styled-components";

const TitleText = styled.h2`
    color: white;
`;

const Title = (props) => {
    const title = props.title;
    const date = props.date;
    
    return ( 
            <TitleText>{title}</TitleText> 
    )
}

export default Title;