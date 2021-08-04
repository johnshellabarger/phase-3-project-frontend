import React, {useState} from 'react'
import NewActivityForm from './NewActivityForm'
import ActivitiesList from './ActivitiesList'

const ActivitiesContainer = () => {
    const [activities, setActivities] = useState([])
    
    function onNewActivitySubmit(data){
        const newList = [...activities, data]
        setActivities(newList)    
    }
 
    return (
        <div>
            <ActivitiesList activities={activities} activities={activities} setActivities={setActivities}/>
            <NewActivityForm onNewActivitySubmit={onNewActivitySubmit}/>
        </div>
    )
}

export default ActivitiesContainer
