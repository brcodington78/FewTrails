import React from 'react';
import {Link} from 'react-router-dom'

const HomeTrailItem = (props) => {
    console.log('trail item props', props)
    let {trail} = props
    if (!trail) {
        return null
    } else {
        return (
            <div className='home-trail-item-container'>
                <Link to={`/trail/${props.trail.id}`}>
                    <img className='home-trail-item-image' src={props.trail.photoUrl}/>
                </Link>
                <div className='home-trail-item-info'>
                    
                </div>
            </div>
        )

    }
}

export default HomeTrailItem