import React from 'react'

function Maps(props) {
    return(
        <ul className= "box">
            <li className="el1">Title: {props.title}</li>
            <li className="el2">Description: {props.description}</li>
            <li className="el3">Price: {props.price}</li>
        </ul>
    )
}

export default Maps