import React, {useMemo, useRef, useEffect } from 'react'
import useInput from '../hooks/useInput'
import TitleComponent from './TitleComponent'

function InputComponent(props) {
    console.log("Input- "+props.name)
    const [name, bindName, resetName] = useInput('')
    const [email, bindEmail, resetEmail] = useInput('')
    const [rating, bindRating, resetRating] = useInput('')
    const inputRef = useRef(null)

    useEffect(() => {
        if(props.name === "Product")
        inputRef.current.focus()
    },[])

    const submitHandler = e => {
        alert("hello"+ name + email + rating)
        resetName()
        resetEmail()
        resetRating()
    }
    
    const displayTitle = useMemo(
        () => {
            return (<TitleComponent name = {props.name}/>)
        },
        [props.name]
    )

    return (
        <form onSubmit={submitHandler}> 
            {displayTitle}
            <div style={{margin:10, padding:5}}>
                <label> Name </label>
                <input type="text" {...bindName} ref={inputRef} />
            </div>
            <div style={{margin:10, padding:5}}>
                <label> Email </label>
                <input type="text" {...bindEmail} />
            </div>
            <div style={{margin:10, padding:5}}>
                <label> Rating </label>
                <input type="text" {...bindRating} />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default InputComponent
