import React from 'react'
import ActivitiesContainer from '../Activities/ActivitiesContainer'
import { FaChevronDown,FaCalendarWeek } from "react-icons/fa"
import { useState } from 'react'

const Day = ({ id, date}) => {
    const [activities, setActivities] = useState([])
    const [isHidden, setIsHidden] = useState(false)
    const [amPm, setAmPm] = useState({
        start_xm: 'am',
        end_xm: 'am'
    })


    const day = date.toString().split("-")[2]
    const month = date.toString().split("-")[1]
    const month_day = date.toString().split("-")[2]
    
    console.log(date, day, month, month_day)
    function toggleDay(){
        setIsHidden(!isHidden)
    }

    

    
    
    function onNewActivitySubmit(data){

        if(data.start_time && data.end_time){
            // const start = data.start_time.split('T')[1]
            // const end = data.end_time.split('T')[1]
            const startHours = new Date(data.start_time).getHours()
            const startMinutes = ('0' + new Date(data.start_time).getMinutes()).slice(-2)
            const endHours = new Date(data.end_time).getHours()
            const endMinutes = ('0' + new Date(data.end_time).getMinutes()).slice(-2)
            const start = `${startHours}:${startMinutes}`
            const end = `${endHours}:${endMinutes}`
            const newActivity = {
                id: data.id,
                name: data.name,
                description: data.description,
                start_time: start+amPm.start_xm,
                end_time: end+amPm.end_xm,
                day_id: data.day_id
            }
            console.log(newActivity)
        const newList = [...activities, newActivity]
        setActivities(newList)
        setAmPm({
            start_xm: 'am',
            end_xm: 'am'
        })   
    }}



    return (
        <div>
            <h1><FaChevronDown onClick={toggleDay}></FaChevronDown>{`${month}/${day}`}<FaCalendarWeek></FaCalendarWeek></h1>
        {isHidden ? (null) : (<ActivitiesContainer dayId={id} activities={activities} setActivities={setActivities} amPm={amPm} setAmPm={setAmPm} onNewActivitySubmit={onNewActivitySubmit}/>) }
            <div className="line"></div>
        </div>
    )
}

export default Day
