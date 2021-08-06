import React from 'react'
import { Button } from 'semantic-ui-react'
import {FaTrashAlt} from "react-icons/fa"
import { FaMapMarker, FaClock} from "react-icons/fa"
import { FaPlus } from "react-icons/fa"
import { useState } from 'react'



const Activity = ({name, description, startTime, endTime, id, activities, setActivities}) => {
    const [noteShowing, setNoteShowing] = useState(false)
    const startHours = new Date(startTime).getHours()
                const startMinutes = ('0' + new Date(startTime).getMinutes()).slice(-2)
                const endHours = new Date(endTime).getHours()
                const endMinutes = ('0' + new Date(endTime).getMinutes()).slice(-2)
                const start = `${startHours}:${startMinutes}`
                const end = `${endHours}:${endMinutes}`
                timeLast = end.split(':'); // convert to array
                console.log(timeLast)

                function convertStartTime(time){
                var hours = Number(time[0]);
                var minutes = Number(time[1]);
                
                // calculate
                var timeValue;
                
                if (hours > 0 && hours <= 12) {
                  timeValue= "" + hours;
                } else if (hours > 12) {
                  timeValue= "" + (hours - 12);
                } else if (hours == 0) {
                  timeValue= "12";
                }
                 
                timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
                timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM
            }
    
                
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
            <p className='activitiesTime'><FaClock className='activitiesTimeClock'></FaClock>{start}-{end}</p>
            <button className='trashCan' onClick={handleDelete} id={id}><FaTrashAlt></FaTrashAlt></button> 
        </div>
    )
}

export default Activity
