import React from "react";

const Photo = props => {
    // console.log(props);
    const photo = props.photo;
    const photoTitle = props.title;
    // console.log(props.title)
    return (
        <div>
            <h2>Photo title: {photoTitle}</h2>
             <img src={photo}></img>
        </div>
    )
}

export default Photo;