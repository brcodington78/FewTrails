import React from 'react'
import {Link} from 'react-router-dom'

const ParkTrailItem = (props) => {
    let description;
    if (props.trail.description.length > 120) {
        description = props.trail.description.slice(0,119) + "..."
    } else {
        description = props.trail.description
    }

    let {trail} = props
    return (
        <>
        <Link to={`/trail/${trail.id}`}>
            <div className='park-trail-item-container'>
                <img className='park-trail-item-pic' src={trail.photoUrl} />
                <div className='park-trail-item-info'>
                    <h1 className='park-trail-title'>{trail.name}</h1>
                    <h3 className='park-trail-parkname'>{props.parkName}</h3>
                    <div>
                        <div className={`${trail.difficulty}-dif`}>{trail.difficulty}</div>
                        {/* <Review /> */}
                    </div>
                    <p className='park-trail-length'>{`Length: ${trail.length_in_miles} mi`}</p>
                    <div className='park-trail-description'>{description}</div>

                </div>
            </div>
        </Link>
        </>
        
    )
}

export default ParkTrailItem