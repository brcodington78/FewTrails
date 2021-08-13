import React from 'react';


const BannerOptions = (props) => {
    return (
        <a className='direction-link' href={`https://www.google.com/maps/dir/Current+Location/${props.coords[0]},${props.coords[1]}?ref=trail-action-menu-directions`}>
            <div className='banner-options'>
                <div className='banner-item-container'>

                    <div className='directions-icon'>
                        <img className='directions-pic' src='https://cdn-assets.alltrails.com/assets/packs/media/Green-Variant/directions-green-ed305b8c.png'/>

                    </div>
                    <p className='directions-text'>Directions</p>
                </div>
            </div>
        </a>
    )
}

export default BannerOptions