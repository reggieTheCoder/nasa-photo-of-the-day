import React from 'react'

const PhotographedBy = props => {
    const photographer = props.photographer;
    console.log(props.photographer);
    return (
        <div>
            <h4>Photographed By: {photographer}</h4> 
        </div>
    )
}

export default PhotographedBy;