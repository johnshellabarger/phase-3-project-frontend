import React, {useState} from 'react'
import Destination from './Destination'
import DestinationForum from './DestinationForum'

const PlanTrip = () => {
    const [destination, setDestination] = useState({})
    const [isHidden, setisHidden] = useState(false)
    const [formData, setFormData] = useState({
        location: "",
        start_date: "",
        end_date: ""
    })

    function handleOnChange(event){
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
        setisHidden(!isHidden)
      }

    return (
        <>
            {isHidden ? (<Destination destination = { destination }/>) : (
                <DestinationForum 
                handleOnChange = {handleOnChange}
                handleSubmit = {handleSubmit}
                formData = {formData}
                destination = {destination}
            />)
            }
        </>
    )
}




export default PlanTrip
