import React from "react";
import styled from "styled-components";

const DescriptionText = styled.p`
    margin: auto;
    line-height: 2em;
    width: 50%;
    padding: 2%;
`;
const Description = props => {
    const description = props.description
    return (
    <DescriptionText>{description}</DescriptionText>
    )
}

export default Description;