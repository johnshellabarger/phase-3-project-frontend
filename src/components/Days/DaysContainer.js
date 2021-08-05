import React from 'react';
import DayList from './DaysList';

const DayContainer = ({ daysOnTrip, trip}) => {
    

    return (
        <>
            <h1 className='itineraryHeader'>Itinerary</h1>
            <div className='day_container'>
                
                <DayList 
                    daysOnTrip = {daysOnTrip}
                    trip = {trip}
                />
            </div>
            
        </>
    )
}

export default DayContainer
