import React from "react";

const Title = (props) => {
    const title = props.title;
    const date = props.date;
    
    return ( 
        <div className = "title" >
            <h2>{title}</h2>
        </div>
    )
}

export default Title;