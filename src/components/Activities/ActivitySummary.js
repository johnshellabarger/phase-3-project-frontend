import React from 'react'
import ActivitiesNames from './ActivitiesNames'

function ActivitySummary({ days }) {
    return (
        <ul>   
            {days.map(day => {
                return (
                    <>
                    <li>{day.date}</li>
                    <ActivitiesNames day={day}/>
                    </>
                )
            })}
        </ul>
    )
}

export default ActivitySummary
