import React from 'react'
import DaysContainer from './Days/DaysContainer.js'

const Destination = ({destination}) => {

    function daysOnTrip(){
        if(destination.start_date, destination.end_date){
            const start = destination.start_date.split('T')[0]
            const end = destination.end_date.split('T')[0]
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
        if(destination.start_date, destination.end_date){
            const start = strDate.split('T')[0]
            const end = endDate.split('T')[0]
            const startMonth = start.split('-')[1]
            const startDay = start.split('-')[2]
            const endMonth = end.split('-')[1]
            const endDay = end.split('-')[2]
            return `${startMonth}/${startDay} - ${endMonth}/${endDay}`
        }
    }

    return (
        <div>
            <h1>{destination.location}</h1>
            <h2>{tripLength(destination.start_date, destination.end_date)}</h2>
           
            <DaysContainer 
                daysOnTrip = {daysOnTrip}
                destination = {destination}
            />
        </div>
    )
}

export default Destination
