import React from 'react'
import { Button } from 'semantic-ui-react'
import {FaTrashAlt} from "react-icons/fa"
import { FaMapMarker, FaClock} from "react-icons/fa"
import { FaPlus } from "react-icons/fa"
import { useState } from 'react'



const Activity = ({name, description, startTime, endTime, id, activities, setActivities}) => {
    const [noteShowing, setNoteShowing] = useState(false)
    
    function handleDelete(){
        fetch(`http://localhost:9292/activities/${id}`, {
            method: 'DELETE'
        })
        const updatedActivities = activities.filter(activity => activity.id !== id)
        setActivities(updatedActivities)
    }

    function handleAddNote(){
        setNoteShowing(!noteShowing)
    }

    return (
        <div className='activitiesContainer'>
            <h3 className='activitiesName'><FaMapMarker className='pin'></FaMapMarker>{name}</h3>
            <h3 className='activitiesDescription'>{`- ${description}`}</h3>
            <div className='LineOnActivities'></div>
            <p className='activitiesTime'><FaClock className='activitiesTimeClock'></FaClock>{startTime}-{endTime}</p>
            <button className='trashCan' onClick={handleDelete} id={id}><FaTrashAlt></FaTrashAlt></button> 
        </div>
    )
}

export default Activity
