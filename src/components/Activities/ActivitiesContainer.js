import React, {useState} from 'react'
import NewActivityForm from './NewActivityForm'

const ActivitiesContainer = () => {
    const [activities, setActivities] = useState([])
    
    function onNewActivitySubmit(data){
        const newList = [...activities, data]
        setActivities(newList)    
    }


    return (
        <div>
            <NewActivityForm 
                activities={activities} 
                setActivities={setActivities} 
                onNewActivitySubmit={onNewActivitySubmit}/>

                <ActivitiesList activities={activities}/>
        </div>
    )
}

export default ActivitiesContainer
