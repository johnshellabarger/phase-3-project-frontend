import React from 'react'
import { Button, Form} from 'semantic-ui-react'


const Activity = ({activity, description, startTime, endTime, id, activities, setActivities}) => {

    
    function handleDelete(){

        fetch(`http://localhost:9292/activities/${id}`, {
            method: 'DELETE'
        })
        const updatedActivities = activities.filter(activity => activity.id !== id)
        setActivities(updatedActivities)
    }

    return (
        <div>
            <p>Start: <span>{startTime}</span> End: <span>{endTime}</span></p>
            <h3>{activity}</h3>
            <h6>{description}</h6>
            <Button onClick={handleDelete} id={id}>Delete Activity</Button>
        </div>
    )
}

export default Activity
