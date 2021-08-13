import React from 'react';
import {Link} from 'react-router-dom'

const TrailListItem = (props) => {
    
    

    let shorterName = props.name;
    if (shorterName.length > 27) {
        shorterName = shorterName.slice(0,26) + '...'
    }
    return (
            <li className='list-trail-item-container'>
                <div>
                    <Link to={`/trail/${props.trailId}`}>

                        <img className='trail-item-img' src={props.photoUrl}/>
                    </Link>
                    <div className='trail-item-info'>
                        <h2 className='trail-item-name'>{shorterName}</h2>
                        <h3 className='trail-item-park-name'>{props.parkName}</h3>
                        <div>
                            <p className={`${props.difficulty}-dif trail-list-dif`}>{props.difficulty}</p>

                        </div>
                        <div>
                            <p className='trail-item-length'>{`Length: ${props.length} mi`}</p>
                        </div>

                    </div>
                </div>
            </li>
    )
}

export default TrailListItem