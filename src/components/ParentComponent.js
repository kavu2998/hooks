import React, { useContext } from 'react'
import { CopyRightContext } from '../App'
import '../App.css'
import InputComponent from './InputComponent'

function ParentComponent(props) {
    const copyrightContext = useContext(CopyRightContext)
    console.log("Parent")
    return (
        <div>

            <InputComponent name = {props.name} />
            <span className="footer"> {copyrightContext} </span>
        </div>
    )
}

export default ParentComponent
