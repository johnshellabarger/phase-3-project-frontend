import React from 'react'
import { useState } from 'react'
import { useRef } from 'react';
import { FaSave, FaTimes } from "react-icons/fa"




const Notepad = () => {
    const [text,setText] = useState('Write or paste anything here: how to get around, tips and tricks')
    const [isInEditMode, setIsInEditMode] = useState(false)

    const inputRef = React.useRef();

    function changeEditMode(){
        setIsInEditMode(!isInEditMode)
    }  

    const updateValue = (e) => {
            setIsInEditMode(false)
            setText(inputRef.current.value)
    }

    function renderEditView(){
        return (
            <div className='notesDiv'>
                <textarea  autoFocus={true}  className='noteInput' ref={inputRef} type='text'  cols="40" rows="5" ></textarea>
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
