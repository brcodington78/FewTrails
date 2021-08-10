import React from 'react'
import {Link} from 'react-router-dom'

const ParkTrailItem = (props) => {
    let {trail} = props
    console.log('trail', trail)
    return (
        <>
        <Link to={`/trail/${trail.id}`}>
            <div className='park-trail-item-container'>
                <img className='park-trail-item-pic' src={trail.photoUrl} />
                <div className='park-trail-item-info'>
                    <h1 className='park-trail-title'>{trail.name}</h1>
                    <h3 className='park-trail-parkname'>{props.parkName}</h3>
                    <div>
                        <div>{trail.difficulty}</div>
                        {/* <Review /> */}
                    </div>
                    <p className='park-trail-length'>{`Length: ${trail.length_in_miles} mi`}</p>
                    <p> </p>

                </div>
            </div>
        </Link>
        </>
        
    )
}

export default ParkTrailItem