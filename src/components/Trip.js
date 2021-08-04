import React from 'react'
import DaysContainer from './Days/DaysContainer.js'
import { FaChevronDown,FaCalendar } from "react-icons/fa"
import { useState } from 'react'

const Trip = ({ trip }) => {
    const [isHidden, setIsHidden] = useState(false)

    function daysOnTrip(){
        if(trip.start_date && trip.end_date){
            const start = trip.start_date.split('T')[0]
            const end = trip.end_date.split('T')[0]
            const startYear = (start.split('-')[0])
            const startMonth = (start.split('-')[1])
            const startDay = (start.split('-')[2])
            const endYear = (end.split('-')[0])
            const endMonth = (end.split('-')[1])
            const endDay = (end.split('-')[2])

            let newStartDate = new Date(`${startMonth}-${startDay}-${startYear}`)
            let newEndDate = new Date(`${endMonth}-${endDay}-${endYear}`)

            var Difference_In_Time = newEndDate.getTime() - newStartDate.getTime();
            var tripLength = Difference_In_Time / (1000 * 3600 * 24);
            return tripLength
        }
    }

    function tripLength(strDate, endDate){
        if(trip.start_date && trip.end_date){
            const start = strDate.split('T')[0]
            const end = endDate.split('T')[0]
            const startMonth = start.split('-')[1]
            const startDay = start.split('-')[2]
            const endMonth = end.split('-')[1]
            const endDay = end.split('-')[2]
            return `${startMonth}/${startDay} - ${endMonth}/${endDay}`
        }
    }

    function handleNotes(){
        setIsHidden(!isHidden)
    }

    return (
        <div>
            <div>
                <h1>{trip.location}</h1>
                <h4><FaCalendar></FaCalendar>{tripLength(trip.start_date, trip.end_date)}</h4>
            </div>
           
            <DaysContainer 
                daysOnTrip = {daysOnTrip}
                trip = {trip}
            
            />
            <span>
                <h1><FaChevronDown onClick={handleNotes}></FaChevronDown>Notes</h1>
                {isHidden ? (
                    <span>
                        <h1>Hey!</h1>
                    </span>) : (
                    null)
                }
            </span>
        </div>
    )
}

export default Trip
