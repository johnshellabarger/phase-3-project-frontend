import React, {useState} from 'react'


const NewActivityForm = ({ onNewActivitySubmit}) => {

    const [newActivity, setNewActivity] = useState({
        activity: "",
        description: "",
        start_time: "",
        end_time: ""
    })

    function handleValue(event) {
        setNewActivity({
          ...newActivity,
          [event.target.name]: event.target.value,
        });
      }

    function handleNewActivity(event) {
        event.preventDefault();
        
        const createdActivity =
        {
            activity: newActivity.activity,
            description: newActivity.description,
            start_time: newActivity.start_time,
            end_time: newActivity.end_time
        }
        onNewActivitySubmit(createdActivity)
        
        fetch(`http://localhost:9292/activities`, {
          method : 'POST',
          headers : {
            "Content-type" : "application/json"
          },
          body : JSON.stringify(createdActivity)
    
        })
        .then(response => response.json())
        .then(data => onNewActivitySubmit(data))
        setNewActivity({
            activity: "",
            description: "",
            start_time: "",
            end_time: ""
        })
      }

    return (
        <div>
            <form onSubmit={handleNewActivity}>
                <input placeholder='Activity' name='activity' value={newActivity.activity} onChange={handleValue}/>
                <input placeholder='description' name='description' value={newActivity.description} onChange={handleValue}/>
                <select id='start_time' name='start_time' onChange={handleValue}>
                    <option value='12:00'>12:00 am</option>
                    <option value='12:30'>12:30 am</option>
                    <option value='1:00'>1:00 am</option>
                    <option value='1:30'>1:30 am</option>
                    <option value='2:00'>2:00 am</option>
                    <option value='2:30'>2:30 am</option>
                    <option value='3:00'>3:00 am</option>
                    <option value='3:30'>3:30 am</option>
                    <option value='4:00'>4:00 am</option>
                    <option value='4:30'>4:30 am</option>
                    <option value='5:00'>5:00 am</option>
                    <option value='5:30'>5:30 am</option>
                    <option value='6:00'>6:00 am</option>
                    <option value='6:30'>6:30 am</option>
                    <option value='7:00'>7:00 am</option>
                    <option value='7:30'>7:30 am</option>
                    <option value='8:00'>8:00 am</option>
                    <option value='8:30'>8:30 am</option>
                    <option value='9:00'>9:00 am</option>
                    <option value='9:30'>9:30 am</option>
                    <option value='10:00'>10:00 am</option>
                    <option value='10:30'>10:30 am</option>
                    <option value='11:00'>11:00 am</option>
                    <option value='11:30'>11:30 am</option>
                    <option value='12:00'>12:00 pm</option>
                    <option value='12:30'>12:30 pm</option>
                    <option value= '13:00:00' >1:00 pm</option>
                    <option value='1:30'>1:30 pm</option>
                    <option value='14:00:00'>2:00 pm</option>
                    <option value='2:30'>2:30 pm</option>
                    <option value='3:00'>3:00 pm</option>
                    <option value='3:30'>3:30 pm</option>
                    <option value='4:00'>4:00 pm</option>
                    <option value='4:30'>4:30 pm</option>
                    <option value='5:00'>5:00 pm</option>
                    <option value='5:30'>5:30 pm</option>
                    <option value='6:00'>6:00 pm</option>
                    <option value='6:30'>6:30 pm</option>
                    <option value='7:00'>7:00 pm</option>
                    <option value='7:30'>7:30 pm</option>
                    <option value='8:00'>8:00 pm</option>
                    <option value='8:30'>8:30 pm</option>
                    <option value='9:00'>9:00 pm</option>
                    <option value='9:30'>9:30 pm</option>
                    <option value='10:00'>10:00 pm</option>
                    <option value='10:30'>10:30 pm</option>
                    <option value='11:00'>11:00 pm</option>
                    <option value='11:30'>11:30 pm</option>
                </select>
                <select id='end_time' name='end_time' onChange={handleValue}>
                <option value='12:00'>12:00 am</option>
                    <option value='12:30'>12:30 am</option>
                    <option value='1:00'>1:00 am</option>
                    <option value='1:30'>1:30 am</option>
                    <option value='2:00'>2:00 am</option>
                    <option value='2:30'>2:30 am</option>
                    <option value='3:00'>3:00 am</option>
                    <option value='3:30'>3:30 am</option>
                    <option value='4:00'>4:00 am</option>
                    <option value='4:30'>4:30 am</option>
                    <option value='5:00'>5:00 am</option>
                    <option value='5:30'>5:30 am</option>
                    <option value='6:00'>6:00 am</option>
                    <option value='6:30'>6:30 am</option>
                    <option value='7:00'>7:00 am</option>
                    <option value='7:30'>7:30 am</option>
                    <option value='8:00'>8:00 am</option>
                    <option value='8:30'>8:30 am</option>
                    <option value='9:00'>9:00 am</option>
                    <option value='9:30'>9:30 am</option>
                    <option value='10:00'>10:00 am</option>
                    <option value='10:30'>10:30 am</option>
                    <option value='11:00'>11:00 am</option>
                    <option value='11:30'>11:30 am</option>
                    <option value='12:00'>12:00 pm</option>
                    <option value='12:30'>12:30 pm</option>
                    <option value='1:00'>1:00 pm</option>
                    <option value='1:30'>1:30 pm</option>
                    <option value='14:00:00'>2:00 pm</option>
                    <option value='2:30'>2:30 pm</option>
                    <option value='3:00'>3:00 pm</option>
                    <option value='3:30'>3:30 pm</option>
                    <option value='4:00'>4:00 pm</option>
                    <option value='4:30'>4:30 pm</option>
                    <option value='5:00'>5:00 pm</option>
                    <option value='5:30'>5:30 pm</option>
                    <option value='6:00'>6:00 pm</option>
                    <option value='6:30'>6:30 pm</option>
                    <option value='7:00'>7:00 pm</option>
                    <option value='7:30'>7:30 pm</option>
                    <option value='8:00'>8:00 pm</option>
                    <option value='8:30'>8:30 pm</option>
                    <option value='9:00'>9:00 pm</option>
                    <option value='9:30'>9:30 pm</option>
                    <option value='10:00'>10:00 pm</option>
                    <option value='10:30'>10:30 pm</option>
                    <option value='11:00'>11:00 pm</option>
                    <option value='11:30'>11:30 pm</option>
                </select>
                <button type="submit">Create New Activity</button>
            </form>
            
        </div>
    )
}

export default NewActivityForm
