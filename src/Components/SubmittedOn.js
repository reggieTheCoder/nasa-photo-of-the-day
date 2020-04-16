import React from 'react'

const SubmittedOn = props => {
    const submissionDate = props.date
    return (
        <div>
            <h3>Photo submitted on:</h3>
            <p> {submissionDate}</p>
        </div>
        
    )
}

export default SubmittedOn;