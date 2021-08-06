import React from 'react'
import ActivitiesNames from './ActivitiesNames'

function ActivitySummary({ days, isListShowing, getActivityNames, dayActivities, setDayActivities}) {


    return (
        <ul>   
            {days.map(day => {
                return (
                    <>
                    <li>{day.date}</li>
                    <ActivitiesNames 
                        day={day} 
                        getActivityNames={getActivityNames} 
                        isListShowing={isListShowing} 
                        dayActivities={dayActivities} 
                        setDayActivities={setDayActivities}
                    />
                    </>
                )
            })}
        </ul>
    )
}

export default ActivitySummary
