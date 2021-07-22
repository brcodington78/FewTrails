import React from 'react';
import {Link} from 'react-router-dom'

const TrailListItem = (props) => {
    
    console.log('list-item',props.parkName)

    return (
            <li>
                <div>
                    <Link to={`/trail/${props.trailId}`}>

                        <img className='trail-item-img' src={props.photoUrl}/>
                    </Link>
                    <div>
                        <h2>{props.name}</h2>
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