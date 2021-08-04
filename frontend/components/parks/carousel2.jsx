import React from 'react'
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Icon from 'react-fa';


const Carousel2 = (props) => {
    console.log(props)

    return(
        <Carousel
            plugins={[
                'infinite',
                {
                resolve: slidesToShowPlugin,
                options: {
                numberOfSlides: 3
                }
                },
                {
                    resolve: arrowsPlugin,
                    options: {
                      arrowLeft: <button className='left-arrow'>{`<`}</button>,
                      arrowLeftDisabled: <button><Icon name="angle-left" /></button>,
                      arrowRight: <button className='right-arrow'>{`>`}</button>,
                      arrowRightDisabled: <button><Icon name="angle-right" /></button>,
                      addArrowClickHandler: true,
                    }
                }
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

