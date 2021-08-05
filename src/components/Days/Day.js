import React from 'react'
import ActivitiesContainer from '../Activities/ActivitiesContainer'
import { FaChevronDown, FaCalendarWeek,FaChevronRight,FaGripHorizontal } from "react-icons/fa"
import { useState } from 'react'

const Day = ({ day_id, date}) => {
    const [activities, setActivities] = useState([])
    const [isHidden, setIsHidden] = useState(false)
    const [isOptionsShowing, setIsOptionsShowing] = useState(false)
    const day = date.toString().split("-")[2].split('T')[0]
    const month = date.toString().split("-")[1]
    
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    const d = new Date(date)
    const dayOfWeek = weekday[d.getDay()]

    function toggleDay(){
        setIsHidden(!isHidden)
    }

    function handleClick(){
        setIsOptionsShowing(!isOptionsShowing)
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
                    start_time: start,
                    end_time: end,
                    day_id: data.day_id
                }
                console.log(newActivity)
            const newList = [...activities, newActivity]
            setActivities(newList)    
        }}

    return (
        <div>
            <h1>
                {isHidden ? (<FaChevronRight className='chevronDown' onClick={toggleDay}></FaChevronRight>) : (<FaChevronDown className='chevronDown' onClick={toggleDay}></FaChevronDown>)}
                <span className='daysOnTrip'>{`${dayOfWeek} ${month}/${day}`}</span>
                <FaCalendarWeek className='dayCalendar'></FaCalendarWeek>
                {isHidden ? (<FaGripHorizontal onClick={handleClick}className='options'></FaGripHorizontal>) : (null)}
                {isOptionsShowing ? (
                    <div id='dropDown'>
                        <div id='myDropDown'></div>
                        <h5 id='dropDownOptions'>Add note</h5>
                        <h5 id='dropDownOptions'>Change color</h5>
                    </div>) : (null)}
            </h1>
                {isHidden ? (null) : (<ActivitiesContainer activities={activities} day_id={day_id} onNewActivitySubmit={onNewActivitySubmit}/>) }
            <div className='insertSectionSpace'>
            </div>
        </div>
    )
}

export default Day
