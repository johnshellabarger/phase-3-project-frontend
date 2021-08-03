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
            <NewActivityForm onNewActivitySubmit={onNewActivitySubmit}/>
            <ActivitiesList activities={activities} activities={activities} setActivities={setActivities}/>
        </div>
    )
}

export default ActivitiesContainer
