import React from 'react'
import { Button, Form} from 'semantic-ui-react'
import Destination from './Destination'

const DestinationForm = ({handleOnChange, handleSubmit, formData, destination }) => {
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <input type='text' placeholder='Where to?' name='location' value={formData.location} onChange={handleOnChange}></input>
                <span id='start-date' className="pb-1 pt-2 w-32"><input required name='start_date' type="datetime-local" onChange={handleOnChange}/></span>
                <span id='end-date' className="pb-1 pt-2 w-32"><input required name='end_date' type="datetime-local" onChange={handleOnChange}/></span>
                <Button type='submit' class="fluid ui button" style={{color: "orange"}}>Create Trip</Button>
            </Form>
        </div>
    )
}

export default DestinationForm
