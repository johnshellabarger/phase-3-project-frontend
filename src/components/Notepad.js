import React from 'react'
import { useState } from 'react'
import { useRef } from 'react';
import { FaSave, FaTrash } from "react-icons/fa"




const Notepad = ({ trip, text, setText }) => {
    const [isInEditMode, setIsInEditMode] = useState(false)

    const inputRef = React.useRef();

    function changeEditMode(){
        setIsInEditMode(!isInEditMode)
    }  

    function handleChange(){
        setText(inputRef.current.value)
    }

    const updateValue = (e) => {
        setIsInEditMode(false)
        fetch(`http://localhost:9292/notes`, {
            method : 'POST',
            headers : {
              "Content-type" : "application/json"
            },
            body : JSON.stringify({note_text: text, trip_id: trip.id})
          })
          .then(resp => resp.json())
          .then(data => setText(data.note_text))
    }

    function renderEditView(){
        return (
            <div className='notesDiv'>
                <textarea autoFocus={true} className='noteInput' onChange={handleChange}ref={inputRef} type='text'  cols="40" rows="5" ></textarea>
                <span><FaTrash onClick={changeEditMode}></FaTrash></span>
                <span><FaSave onClick={updateValue}></FaSave></span>
            </div>
        )
    }

    function renderDefaultView(){
        return (    
            <div className='notesDiv' onClick={changeEditMode}>
                <span className='notesText'>{text}</span>
            </div>
        )
    }

    return (
        <div className='notesContainer'>
        {isInEditMode ? (renderEditView()) : (renderDefaultView())}
        </div>
    )
}

export default Notepad
