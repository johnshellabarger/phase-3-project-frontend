import React from 'react'
import DaysContainer from './Days/DaysContainer.js'
const Destination = ({destination}) => {

    return (
        <div>
            <h1>Hello</h1>
            <h2>{destination.location}</h2>
            <DaysContainer />
        </div>
    )
}

export default Destination
