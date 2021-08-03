import React from 'react'
import Activity from './Activity'

const ActivitiesList = ({activities}) => {
    return (
        <div>
            {activities.map (activity => {
                return(
                <Activity 
                    activity={activity.activity} 
                    description={activity.description} 
                    startTime={activity.start_time} 
                    endTime={activity.end_time}/>
            )})}
        </div>
    )
}

export default ActivitiesList
