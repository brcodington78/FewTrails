import React from 'react';
import BannerOptions from './banner_options'


const Banner = (props) => {
    
    return (
        <div className='banner-container'>
            <img className='trail-banner-img' src={props.photoUrl}></img>
            <div className='trail-image-text'>
                <h2 className='trail-title'>{props.name}</h2>
                <p className='trail-park'>{props.difficulty}</p>
            </div>
            <BannerOptions coords={props.coords}/>

        </div>
    )
}

export default Banner;