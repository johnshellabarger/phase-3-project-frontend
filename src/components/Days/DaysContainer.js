import React from 'react';
import DayList from './DaysList';

const DayContainer = ({ daysOnTrip, destination }) => {

    return (
        <div>
            <DayList 
                daysOnTrip = {daysOnTrip}
                destination = {destination}
            />
        </div>
    )
}

export default DayContainer
