import React, {useState} from 'react';
import PlanTrip from './PlanTrip_Page';
import TripList from './TripList'
function Home(){
    const [trips, setTrips] = useState([])
    const [isHid, setIsHid] = useState(false)
    function handleOnClick(){
        fetch(`http://localhost:9292/trips`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setTrips(data)})
    }
    return(
        <div>
            <h1 className='logo'>travelog &#128745;</h1>
            <PlanTrip />
            <button onClick={handleOnClick}>View Your Trips</button>
            {isHid ? (<TripList trips={trips}/>) : (null)} 
        </div>

    )
}

export default Home