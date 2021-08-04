import React from 'react'
import { Button, Form} from 'semantic-ui-react'

const TripForm = ({handleOnChange, handleSubmit, formData }) => {
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <input type='text' placeholder='where to?' name='location' value={formData.location} onChange={handleOnChange}></input>
                <span id='start-date' className="pb-1 pt-2 w-32"><input required name='start_date' type="datetime-local" onChange={handleOnChange}/></span>
                <span id='end-date' className="pb-1 pt-2 w-32"><input required name='end_date' type="datetime-local" onChange={handleOnChange}/></span>
                <Button type='submit'>Create Trip</Button>
            </Form>
        </div>
    )
}

export default TripForm
