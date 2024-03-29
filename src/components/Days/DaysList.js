import React, {useState, useEffect} from 'react'
import Day from './Day'


const DaysList = ({ daysOnTrip, trip, getActivityNames, setGetActivityNames }) => {
    
    const [tripDays, setTripDays] = useState([])
    const days = daysOnTrip() + 1
    const array = new Array(days).fill('0')

    function addDays(days) {
        if(trip.start_date && trip.end_date){
            const start = trip.start_date.split('T')[0]
            const startYear = (start.split('-')[0])
            const startMonth = (start.split('-')[1])
            const startDay = (start.split('-')[2])

            let newStartDate = new Date(`${startMonth}-${startDay}-${startYear}`)

            const result = new Date(newStartDate);
            result.setDate(result.getDate() + days);
            return result;
        }
           
        }

        const eachDay = array.map((item, i) => addDays(i))
        
        useEffect(() => {
        
            fetch(`http://localhost:9292/days`, {
                method: 'POST',
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    dates : eachDay,
                    trip_id: trip.id
                })
            })
            .then(response => response.json())
            .then(data => setTripDays(data))
    }, [trip])
    

    return (
        <div>
            {tripDays.map((day, i) => {
                return (
                    <Day 
                        key = {i}
                        day_id = {day.id}
                        date = {day.date}
                        getActivityNames={getActivityNames}
                        setGetActivityNames={setGetActivityNames}
                    />
            )})}
        </div>
    )
}

export default DaysList
