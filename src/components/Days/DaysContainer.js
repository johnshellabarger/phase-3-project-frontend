import React from 'react';
import DayList from './DaysList';

const DayContainer = ({ daysOnTrip, destination }) => {

    return (
        <div>
            <h1>Itinerary</h1>
            <DayList 
                daysOnTrip = {daysOnTrip}
                destination = {destination}
            />
        </div>
    )
}

export default DayContainer
