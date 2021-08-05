import React, {} from 'react'
import NewActivityForm from './NewActivityForm'
import ActivitiesList from './ActivitiesList'

const ActivitiesContainer = ({dayId, activities, setActivities, onNewActivitySubmit}) => {
    
    // const [activities, setActivities] = useState([])
    
    // function onNewActivitySubmit(data){

    //     if(data.start_time && data.end_time){
    //         // const start = data.start_time.split('T')[1]
    //         // const end = data.end_time.split('T')[1]
    //         const startHours = new Date(data.start_time).getHours()
    //         const startMinutes = ('0' + new Date(data.start_time).getMinutes()).slice(-2)
    //         const endHours = new Date(data.end_time).getHours()
    //         const endMinutes = ('0' + new Date(data.end_time).getMinutes()).slice(-2)
    //         const start = `${startHours}:${startMinutes}`
    //         const end = `${endHours}:${endMinutes}`
    //         const newActivity = {
    //             id: data.id,
    //             name: data.name,
    //             description: data.description,
    //             start_time: start,
    //             end_time: end,
    //             day_id: data.day_id
    //         }
    //         console.log(newActivity)
    //     const newList = [...activities, newActivity]
    //     setActivities(newList)    
    // }}

 
    return (
        <div>
            <ActivitiesList activities={activities} setActivities={setActivities}/>
            <NewActivityForm day_id={day_id} onNewActivitySubmit={onNewActivitySubmit}/>

        </div>
    )
}

export default ActivitiesContainer
