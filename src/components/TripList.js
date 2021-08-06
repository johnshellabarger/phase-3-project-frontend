import React from 'react'
import EachTrip from './EachTrip'

const TripList = (trips) => {

    function renderTrips(){
        if(trips.length > 0){
            return (
                trips.map(trip => {
                    return(
                    <EachTrip trips={trip} />
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
