import React from 'react';
import {Link} from 'react-router-dom'

const HomeParkItem = (props) => {



    

    let description;
    let {park} = props
    if (!park) {
        return null
    } else {
        if (park.description1.length > 50){
            description = park.description1.slice(0, 49) + '...'   
        } else {
            description = park.description1
        }
        return (
            <div className='home-trail-item-container'>
                <Link to={`/park/${park.id}`}>
                    <img className='home-trail-item-image' src={park.photos[0].photoUrl}/>
                </Link>
                <div className='home-trail-item-info'>
                    <h1 className='home-trail-item-name'>{park.name}</h1>
                    <p className='home-park-info'>{park.us_state}</p>
                    <p className='home-park-info'>{description}</p>
                    
                </div>
            </div>
        )

    }
}

export default HomeParkItem