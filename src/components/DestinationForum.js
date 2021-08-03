import React from 'react'
import Destination from './Destination'

const DestinationForum = ({handleOnChange, handleSubmit, formData, destination }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='where to?' name='location' value={formData.location} onChange={handleOnChange}></input>
                <span id='start-date' className="pb-1 pt-2 w-32"><input required name='start_date' type="datetime-local" onChange={handleOnChange}/></span>
                <span id='end-date' className="pb-1 pt-2 w-32"><input required name='end_date' type="datetime-local" onChange={handleOnChange}/></span>
                <button type='submit'>Create Trip</button>
            </form>
        </div>
    )
}

export default DestinationForum
