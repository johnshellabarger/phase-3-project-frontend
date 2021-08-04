import React, {useState, useEffect} from 'react'
import Day from './Day'


const DaysList = ({ daysOnTrip, trip}) => {
    
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
    const newTripDays = []
    console.log(eachDay, tripDays)


    useEffect(async() => {
        
        
        eachDay.forEach(async(day) => {
            // console.log(eachDay, tripDays)
           await fetch(`http://localhost:9292/days`, {
                method: 'POST',
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    date : day,
                    trip_id: trip.id
                })
            })
            .then(response => response.json())
            .then(data => newTripDays.push(data))
        })
         
        await setTripDays(newTripDays)
            
    }, [trip])
    console.log(tripDays)
    
    



    return (
        <div>
            {tripDays.map((day) => {
                return (
                    <Day 
                        key = {day.index}
                        trip = {trip}
                        date = {day.date}
                    />
                    
            
            
            )})}
                
                
        </div>
    )
}

export default DaysList
