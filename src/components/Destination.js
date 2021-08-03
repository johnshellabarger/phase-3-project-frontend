import React from 'react'
import DaysContainer from './Days/DaysContainer.js'
const Destination = ({destination}) => {

    return (
        <div>
            <h2>{destination.location}</h2>
            <DaysContainer />
        </div>
    )
}

export default Destination
