import React from 'react';
import {Link} from 'react-router-dom'

const HomeTrailItem = (props) => {



    


    let {trail} = props
    if (!trail) {
        return null
    } else {
        let dif;
        if(props.trail.difficulty === 'easy') {
            dif = <div className='easy-dif'>easy</div>
        } else if(props.trail.difficulty === 'moderate') {
            dif = <div className='moderate-dif'>moderate</div>
        } else {
            dif = <div className='hard-dif'>hard</div>
        }
        return (
            <div className='home-trail-item-container'>
                <Link to={`/trail/${props.trail.id}`}>
                    <img className='home-trail-item-image' src={props.trail.photoUrl}/>
                </Link>
                <div className='home-trail-item-info'>
                    <h1 className='home-trail-item-name'>{trail.name}</h1>
                    {dif}
                    <p className='home-trail-item-length'>{`Length: ${trail.length_in_miles} mi`}</p>

                </div>
            </div>
        )

    }
}

export default HomeTrailItem