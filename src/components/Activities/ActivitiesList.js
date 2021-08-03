import React from 'react'
import Activity from './Activity'

const ActivitiesList = ({activities, setActivities}) => {
    return (
        <div>
            {activities.map (activity => {
                return(
                <Activity 
                    activities={activities}
                    activity={activity.activity} 
                    setActivities={setActivities}
                    description={activity.description} 
                    startTime={activity.start_time} 
                    endTime={activity.end_time}
                    id={activity.id}/>
                    
            )})}
        </div>
    )
}

export default ActivitiesList
