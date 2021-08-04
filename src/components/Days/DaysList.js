import React from 'react'
import Day from './Day'


const DaysList = ({ daysOnTrip, destination }) => {
    const days = daysOnTrip() + 1
    const array = new Array(days).fill('0')
    

    function addDays(days) {
        if(destination.start_date && destination.end_date){
            const start = destination.start_date.split('T')[0]
            const startYear = (start.split('-')[0])
            const startMonth = (start.split('-')[1])
            const startDay = (start.split('-')[2])

            let newStartDate = new Date(`${startMonth}-${startDay}-${startYear}`)

            const result = new Date(newStartDate);
            result.setDate(result.getDate() + days);
            return result;
        }
           
        }


    return (
        <div>
            {array.map((item, i) => {
                return (
                    <Day 
                        key = {item.index}
                        destination = {destination}
                        date = {addDays(i)}
                    />
                    
                )
            })}
        </div>
    )
}

export default DaysList
