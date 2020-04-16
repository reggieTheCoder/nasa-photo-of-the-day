import React from 'react'

const PhotographedBy = props => {
    const photographer = props.photographer;
    console.log(props.photographer);
    return (
        <div>
            <h3>Photographed By:</h3>
            <p>{photographer}</p>
        </div>
    
    )
}

export default PhotographedBy;