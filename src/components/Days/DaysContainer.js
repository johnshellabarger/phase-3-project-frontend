import React from 'react';
import DayList from './DaysList';
import Notepad from '../Notepad';
import { FaChevronDown, FaCalendarWeek,FaChevronRight,FaGripHorizontal } from "react-icons/fa"
import { useState } from 'react'


const DayContainer = ({ daysOnTrip, trip, getActivityNames, setGetActivityNames }) => {
    


    const [isNotesOpen, setIsNotesOpen] = useState(false)


    function handleToggle(){
        setIsNotesOpen(!isNotesOpen)
    }


    return (
        <>
            <h1 className='itineraryHeader'>Itinerary</h1>
            <div className='mainContainer'>
                {!isNotesOpen ? (<><h1 className='daysOnTrip'><FaChevronRight onClick={handleToggle} className='chevronDown'></FaChevronRight>Notes</h1>
</>) : (<><h1 className='daysOnTrip'><FaChevronDown onClick={handleToggle} className='chevronDown'></FaChevronDown>Notes</h1>
<Notepad /></>)}
                    
                <div className='day_container'>
                    <DayList 
                        daysOnTrip = {daysOnTrip}
                        trip = {trip}
                        getActivityNames={getActivityNames}
                        setGetActivityNames={setGetActivityNames}
                    />
                </div>

            </div>
        </>
    )
}

export default DayContainer
