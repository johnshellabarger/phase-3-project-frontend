import React, {} from 'react'
import NewActivityForm from './NewActivityForm'
import ActivitiesList from './ActivitiesList'

const ActivitiesContainer = ({day_id, activities, setActivities, getActivityNames, setGetActivityNames, onNewActivitySubmit}) => {

    return (
        <div>
            <ActivitiesList activities={activities} setActivities={setActivities}/>
            <NewActivityForm getActivityNames={getActivityNames} setGetActivityNames={setGetActivityNames} day_id={day_id} onNewActivitySubmit={onNewActivitySubmit}/>

        </div>
    )
}

export default ActivitiesContainer
