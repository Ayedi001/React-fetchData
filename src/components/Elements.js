import React from 'react'

export default function Elements (props) {
    return (
        <div>
         <img src={props.imageUrl}  />
         <p> {props.location} <span><a href={props.googleMapsUrl}>view on google map</a></span></p>
         <h5>{props.title}</h5>
         <p>{props.startDate} - {props.endDate}</p>
         <p>{props.description}</p>
        
        </div>
        
        
    )
    
}
