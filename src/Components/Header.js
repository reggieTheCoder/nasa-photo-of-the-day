import React from 'react';
import styled from "styled-components";

const TitleText = styled.h1`
    color: white;
`;

function Header(props) {
    return (
            <TitleText >Nasa's Astronomy Photo of the Day!!!</TitleText>
    );
}

export default Header