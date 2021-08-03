import React from 'react'
import ActivitiesContainer from '../Activities/ActivitiesContainer'

const Day = ({destination, date}) => {

    console.log(date)
    return (
        <div>
            <h1>Date: {date.toString()}</h1>

            <ActivitiesContainer />
        </div>
    )
}

export default Day
