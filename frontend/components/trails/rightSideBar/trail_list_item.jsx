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
                        <h3>{props.parkName}</h3>
                        <div>
                            <p>{props.difficulty}</p>

                        </div>
                        <div>
                            <p>{props.length}</p>
                        </div>

                    </div>
                </div>
            </li>
    )
}

export default TrailListItem