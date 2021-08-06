import React from 'react'
import { Button } from 'semantic-ui-react'
import {FaTrashAlt} from "react-icons/fa"
import { FaMapMarker, FaClock} from "react-icons/fa"
import { FaPlus } from "react-icons/fa"
import { useState } from 'react'



const Activity = ({name, description, startTime, endTime, id, activities, setActivities, getActivityNames, setGetActivityNames}) => {
    const [noteShowing, setNoteShowing] = useState(false)
                // const startHours = new Date(startTime).getHours()
                // const startMinutes = ('0' + new Date(startTime).getMinutes()).slice(-2)
                // const endHours = new Date(endTime).getHours()
                // const endMinutes = ('0' + new Date(endTime).getMinutes()).slice(-2)
                // const start = `${startHours}:${startMinutes}`
                // const end = `${endHours}:${endMinutes}`
                

            const startingTime = (startTime) => {
                const amPmHours = new Date(startTime).getHours()
                let startHours = new Date(startTime).getHours()
                let startMinutes = ('0' + new Date(startTime).getMinutes()).slice(-2)
                if (startHours > 0 && startHours <= 12) {
                  startHours = startHours;
                } else if (startHours > 12) {
                    startHours = startHours - 12;
                } else if (startHours === 0) {
                  startHours = 12;
                }

                
                const amPm = (amPmHours >= 12) ? " P.M." : " A.M.";  // get AM/PM
                const firstTime = `${startHours}:${startMinutes} ${amPm}`
                return firstTime
            }
                
            const endingTime = (endTime) => {
                const amPmHours = new Date(endTime).getHours()
                let endHours = new Date(endTime).getHours()
                let endMinutes = ('0' + new Date(endTime).getMinutes()).slice(-2)

                if (endHours > 0 && endHours <= 12) {
                   endHours = endHours;
                } else if (endHours > 12) {
                    endHours = endHours - 12;
                } else if (endHours == 0) {
                  endHours = "12";
                }
                 
                
                const amPm = (amPmHours >= 12) ? " P.M." : " A.M.";  // get AM/PM
                const lastTime = `${endHours}:${endMinutes} ${amPm}`
                return lastTime
            }
            
    
                
    function handleDelete(){
        setGetActivityNames(!getActivityNames)
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
            <p className='activitiesTime'><FaClock className='activitiesTimeClock'></FaClock>{startingTime(startTime)}-{endingTime(endTime)}</p>
            <button className='trashCan' onClick={handleDelete} id={id}><FaTrashAlt></FaTrashAlt></button> 
        </div>
    )
}

export default Activity
