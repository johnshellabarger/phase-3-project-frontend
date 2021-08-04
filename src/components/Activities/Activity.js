import React from 'react'
import { Button, Form} from 'semantic-ui-react'
import {FaTrash} from "react-icons/fa"
import { FaMapMarker, FaRegStickyNote} from "react-icons/fa"
import { FaPlus } from "react-icons/fa"
import { useState } from 'react'



const Activity = ({activity, description, startTime, endTime, id, activities, setActivities}) => {
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
        <div>
            <p>Start: <span>{startTime}</span> End: <span>{endTime}</span></p>
            <h3><FaMapMarker></FaMapMarker>{activity}</h3>
            <h6>{description}</h6>
            {noteShowing ? (<span><FaRegStickyNote></FaRegStickyNote>this is a note<FaTrash></FaTrash></span>) : (null)}
            <Button  onClick={handleAddNote}><FaPlus></FaPlus> Note</Button>
            <Button onClick={handleDelete} id={id}><FaTrash></FaTrash></Button>
        </div>
    )
}

export default Activity
