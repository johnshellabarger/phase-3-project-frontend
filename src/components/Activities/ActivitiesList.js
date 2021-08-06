import React from 'react'
import Activity from './Activity'

const ActivitiesList = ({ activities, setActivities}) => {
    // const sortedActivities = activities.sort((activity1, activity2) => activity1.start_time.split(':').slice(0,2) > activity2.start_time.split(':').slice(0,2) ? 1 : activity2.start_time.split(':').slice(0,2) > activity1.start_time.split(':').slice(0,2) ? -1 : 0)
    // const sortedActivities = 
    activities.sort((activity1, activity2) => new Date(activity1.start_time) - new Date(activity2.start_time))
    


    return (
        <div>
            {activities.map (activity => {
                return(
                <Activity 
                    activities={activities}
                    setActivities={setActivities}
                    name={activity.name} 
                    description={activity.description} 
                    startTime={activity.start_time} 
                    endTime={activity.end_time}
                    id={activity.id}/> 
            )})}
        </div>
    )
}

export default ActivitiesList
