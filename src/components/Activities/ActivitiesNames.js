import React, {useState, useEffect} from 'react'

const ActivitiesNames = ({day, getActivityNames}) => {
    const [dayActivities, setDayActivities] = useState([])
    
        useEffect(() => {
            fetch(`http://localhost:9292/days/${day.id}`)
            .then(response => response.json())
            .then(data => {setDayActivities(data.activities)})
        }, [getActivityNames])
        
            function renderActivities(){
                if(dayActivities.length > 0){
                    return (
                        dayActivities.map(activity => {
                            return(
                            <li>{activity.name}</li>
                            )})
                    )
                }else {
                    return( <div>No Activities</div>)
                }
            }
        
    return (
        <ul>
            {renderActivities()}
        </ul>
    )
}

export default ActivitiesNames
