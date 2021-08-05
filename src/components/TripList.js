import React from 'react'
import Trip from './Trip'

const TripList = (trips) => {

    function renderTrips(){
        if(trips.length > 0){
            return (
                trips.map(trip => {
                    return(
                    <Trip />
                    )})
            )
        }else {
          return( <div>No Trips</div>)
        }
    }

    return (
        <div>
            {renderTrips()}
        </div>
    )
}

export default TripList
