import React, {useState, useEffect} from 'react';
import DayList from './DaysList';

const DayContainer = ({ daysOnTrip, trip}) => {
    

    return (
        <div>
            <h1>Itinerary</h1>
            <DayList 
                daysOnTrip = {daysOnTrip}
                trip = {trip}
                

            />
        </div>
    )
}

export default DayContainer
