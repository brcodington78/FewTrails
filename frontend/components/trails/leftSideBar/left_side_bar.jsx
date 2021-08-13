import React from 'react';

const LeftSideBar = (props) => {
    const {description, length_in_miles, elevation_gain_in_feet, route_type, tags} = props.trail

    
    return (
        <div> 
            <p className='description'>{description}</p>
            <ul className='stat-list'>
                <li>
                    <p className='stat-title'>Length</p>
                    <p className='stat'>{length_in_miles} mi</p>
                </li>
                <li>
                    <p className='stat-title'>Elevation gain</p>
                    <p className='stat'>{elevation_gain_in_feet} ft</p>
                </li>
                <li>
                    <p className='stat-title'>Route type</p>
                    <p className='stat'>{route_type}</p>
                </li>
            </ul>
            <div className='tags'>
                {tags.map((tag, index) => {
                    
                    return(

                        <p key={`tag-${index}`} className='tag-text'>{tag}</p>
                    )
                })}
            </div>

        </div>
    )
}

export default LeftSideBar