import React from 'react'
import ActivitiesContainer from '../Activities/ActivitiesContainer'
import { FaChevronDown,FaCalendarWeek } from "react-icons/fa"
import { useState } from 'react'

const Day = ({destination, date}) => {
    const [isHidden, setIsHidden] = useState(false)

    const day = date.toString().split(" ")[0]
    const month = date.toString().split(" ")[1]
    const month_day = date.toString().split(" ")[2]

    function toggleDay(){
        setIsHidden(!isHidden)
    }

    return (
        <div>
            <h1><FaChevronDown onClick={toggleDay}></FaChevronDown>{`${day}, ${month} ${month_day}`}<FaCalendarWeek></FaCalendarWeek></h1>
            {isHidden ? (null) : (<ActivitiesContainer />) }
            <div className="line"></div>
        </div>
    )
}

export default Day
