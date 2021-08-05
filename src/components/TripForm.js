import React from 'react'
import { Button, Form} from 'semantic-ui-react'

const TripForm = ({handleOnChange, handleSubmit, formData }) => {
    return (
        <div className="destinationFormContainer">
            <Form onSubmit={handleSubmit} className="destinationForm">
                <input id='tripInput' type='text' placeholder='Where to?' name='location' value={formData.location} onChange={handleOnChange}></input>
                <span id='start-date' className="pb-1 pt-2 w-32"><input id='tripInput' required name='start_date' type="datetime-local" onChange={handleOnChange}/></span>
                <span id='end-date' className="pb-1 pt-2 w-32"><input id='tripInput' required name='end_date' type="datetime-local" onChange={handleOnChange}/></span>
                <Button id='create_trip_button'type='submit'>Create Trip</Button>
            </Form>
        </div>
    )
}

export default TripForm
