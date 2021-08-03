import React from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const Carousel2 = (props) => {
    console.log(props)

    return(
        <Carousel
            plugins={[
                'infinite',
                'arrows',
                {
                resolve: slidesToShowPlugin,
                options: {
                numberOfSlides: 2
                }
                },
            ]}
            >
            {props.photos.map((photo, index) => {
                return (
                    <img className='park-image' key={`park-img-${index}`} src={photo.photoUrl} />
                )
            })}
        </Carousel>
    )
}

export default Carousel2

