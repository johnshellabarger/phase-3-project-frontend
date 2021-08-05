import React, {useState} from 'react'
import Trip from './Trip'
import TripForm from './TripForm'

const PlanTrip = () => {
    const [trip, setTrip] = useState({})
    const [isHidden, setisHidden] = useState(false)
    const [formData, setFormData] = useState({
        location: "",
        start_date: "",
        end_date: "",
    })

    function handleOnChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
          });
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        const newTrip =
        {
            location: formData.location,
            start_date: formData.start_date,
            end_date: formData.end_date
        }
        
        fetch(`http://localhost:9292/trips`, {
          method : 'POST',
          headers : {
            "Content-type" : "application/json"
          },
          body : JSON.stringify(newTrip)
    
        })
        .then(response => response.json())
        .then(data => {
            setTrip(data)
            setisHidden(!isHidden)
        })

    }

         


        

        
        
      

    return (
        <>
            {isHidden ? (<Trip trip = { trip } />) : (
                <>
                <p className='planTrip'>Plan a new trip</p>
                <TripForm 
                handleOnChange = {handleOnChange}
                handleSubmit = {handleSubmit}
                formData = {formData}
                trip = {trip}
                />
                </>
            )
            }
        </>
    )
}




export default PlanTrip
