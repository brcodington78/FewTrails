import React from 'react';
import BannerOptions from './banner_options';
import {Link} from 'react-router-dom'


const Banner = (props) => {
    console.log('banner-props', props)
    return (
        <div className='banner-container'>
            <img className='trail-banner-img' src={props.photoUrl}></img>
            <div className='trail-image-text'>
                <h2 className='trail-title'>{props.name}</h2>
                <p className={`${props.difficulty}-dif`}>{props.difficulty}</p>
                <Link to={`/park/${props.parkId}`}>
                    <p className='trail-banner-park-name'>{props.parkName}</p>
                </Link>
            </div>
            <BannerOptions coords={props.coords}/>

        </div>
    )
}

export default Banner;