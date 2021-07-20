import React from 'react';


const BannerOptions = (props) => {
    return (
        <div className='banner-options'>
            <a href={`https://www.google.com/maps/dir/Current+Location/${props.coords[0]},${props.coords[1]}?ref=trail-action-menu-directions`}>
                <img className='directions-pic' src='https://cdn-assets.alltrails.com/assets/packs/media/Green-Variant/directions-green-ed305b8c.png'/>
                <p className='directions-text'>Directions</p>
            </a>
        </div>
    )
}

export default BannerOptions