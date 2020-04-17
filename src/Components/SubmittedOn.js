import React from 'react'

const SubmittedOn = props => {
    const submissionDate = props.date
    return (
        <div>
            <h4>Photo submitted on: {submissionDate}</h4>
        </div>  
    )
}

export default SubmittedOn;