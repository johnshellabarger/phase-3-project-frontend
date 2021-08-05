import React from 'react'
import { useState } from 'react'

function ActivitySummary({ days }) {
    const [yourActivities, setYourActivities] = useState([])
    
    
    // const activities = fetch(`http://localhost:9292/activities/`, {
    //         method: 'GET',
    //         headers:{
    //             "Content-Type" : "application/json"
    //         }
    //     }).then(data => data.json())
    //     .then(data => setYourActivities(data))
        
        console.log(yourActivities)


    const tripDays = days.map(activity => {
        return (
            <>
            <li>{activity.date}</li>
            </>
        )
    })


    


    return (
        <div>   
            {tripDays}
        </div>
    )
}

export default ActivitySummary
