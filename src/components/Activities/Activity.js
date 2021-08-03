import React from 'react'

const Activity = ({activity, description, startTime, endTime,}) => {
    return (
        <div>
            <p>Start: <span>{startTime}</span> End: <span>{endTime}</span></p>
            <h3>{activity}</h3>
            <h6>{description}</h6>
        </div>
    )
}

export default Activity
