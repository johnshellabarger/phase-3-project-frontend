import React from 'react';
import DayList from './DaysList';

const DayContainer = ({ daysOnTrip }) => {

    return (
        <div>
            <DayList 
                daysOnTrip = {daysOnTrip}
            />
        </div>
    )
}

export default DayContainer
