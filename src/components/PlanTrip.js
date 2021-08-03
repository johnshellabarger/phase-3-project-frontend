import React, {useState} from 'react'
import Destination from './Destination'

const PlanTrip = () => {
    const [destination, setDestination] = useState({})
    const [formData, setFormData] = useState({
        location: "",
        start_date: "",
        end_date: ""
    })


    function handleOnChange(event){
        event.preventDefault()

        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
          });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
        const newDestination =
        {
            location: formData.location,
            start_date: formData.start_date,
            end_date: formData.end_date
        }
        
        fetch(`http://localhost:9292/destinations`, {
          method : 'POST',
          headers : {
            "Content-type" : "application/json"
          },
          body : JSON.stringify(newDestination)
    
        })
        .then(response => response.json())
        .then(data => setDestination(data))

      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='where to?' name='location' value={formData.location} onChange={handleOnChange}></input>
                <span id='start-date' className="pb-1 pt-2 w-32"><input required name='start_date' type="datetime-local" onChange={handleOnChange}/></span>
                <span id='end-date' className="pb-1 pt-2 w-32"><input required name='end_date' type="datetime-local" onChange={handleOnChange}/></span>
                <button type='submit'>Create Trip</button>
            </form>
            <Destination destination={destination}/>

        </div>
    )
}

export default PlanTrip
