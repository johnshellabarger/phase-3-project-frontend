import React from 'react'
import ActivitiesContainer from '../Activities/ActivitiesContainer'

const Day = ({destination}) => {
    return (
        <div>
            <h1>Date: {destination.start_date}</h1>
            <ActivitiesContainer />
        </div>
    )
}

export default Day
