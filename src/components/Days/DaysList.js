import React from 'react'
import Day from './Day'

const DaysList = ({ daysOnTrip, destination }) => {
    const days = daysOnTrip()
    const array = new Array(days).fill('0')
    console.log(array)

    return (
        <div>
            {array.map((item) => {
                return (
                    <Day 
                        key = {item.index}
                        destination = {destination}
                    />
                )
            })}
        </div>
    )
}

export default DaysList
