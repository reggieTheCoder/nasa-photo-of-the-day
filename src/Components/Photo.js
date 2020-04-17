import React from "react";
import styled from "styled-components"

const Image = styled.img`
    width: 30em;
    height: 20em;
`;

const PhotoText = styled.h2`
    color: white;
`;

const Photo = props => {
    const photo = props.photo;
    const photoTitle = props.title;
    return (
        <div>
            <PhotoText>Photo title: {photoTitle}</PhotoText>
             <Image src={photo}></Image>
        </div>
    )
}

export default Photo;