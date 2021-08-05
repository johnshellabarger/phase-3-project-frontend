import React, {useState, useEffect} from 'react'

const ActivitiesNames = ({day}) => {
    const [dayActivities, setDayActivities] = useState([])
    console.log(day)
        useEffect(() => {
            fetch(`http://localhost:9292/days/${day.id}`)
            .then(response => response.json())
            .then(data => console.log(data))
        }, [])

    return (
        <ul>
            <li>Hi</li>
        </ul>
    )
}

export default ActivitiesNames
