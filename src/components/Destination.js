import React from 'react'
import ActivitiesContainer from './Activities/DayContainer.js'
const Destination = ({destination}) => {

    return (
        <div>
            <h1>Hello</h1>
            <h2>{destination.location}</h2>
            <DayContainer />
        </div>
    )
}

export default Destination
