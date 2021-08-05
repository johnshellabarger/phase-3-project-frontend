import React, {useState} from 'react';
import PlanTrip from './PlanTrip_Page';
import TripList from './TripList'
function Home(){
    const [trips, setTrips] = useState([])
    function handleOnClick(){
        fetch(`http://localhost:9292/trips`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setTrips(data)})
    }
    return(
        <div>
            <h1>travelog &#128745;</h1>
            <p>Plan Your New Trip</p>
            <PlanTrip />
            <button onClick={handleOnClick}>View Your Trips</button>
            <TripList />
        </div>

    )
}

export default Home