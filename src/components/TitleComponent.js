import React from 'react'

function TitleComponent(props) {
    console.log("Title- " + props.name)
    return (
        <div>
            <h2>{props.name} Feedback Form</h2>
        </div>
    )
}

export default TitleComponent
