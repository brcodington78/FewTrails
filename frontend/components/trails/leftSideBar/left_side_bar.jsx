import React from 'react';

const LeftSideBar = (props) => {
    const {description, length_in_miles, elevation_gain_in_feet, route_type, tags} = props.trail

    return (
        <div> 
            <p className='description'>{description}</p>
            <ul>
                <li>
                    <p className='stat-title'>Length</p>
                    <p className='stat'>{length_in_miles}</p>
                </li>
                <li>
                    <p className='stat-title'>Elevation gain</p>
                    <p className='stat'>{elevation_gain_in_feet}</p>
                </li>
                <li>
                    <p className='stat-title'>Route type</p>
                    <p className='stat'>{route_type}</p>
                </li>
            </ul>
        </div>
    )
}

export default LeftSideBar