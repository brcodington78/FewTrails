import React from 'react'
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import Icon from 'react-fa';
import '@brainhubeu/react-carousel/lib/style.css';
import HomeParkItem from './HomeParkItem'

const HomeTrailList = (props) => {
    
    let {parks} = props

    if (!parks) {
        return null
    } else {
        return (
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
                          arrowLeft: <button className='home-button-left'><Icon name="angle-double-left" /></button>,
                          arrowLeftDisabled:<button className='home-button-left'><Icon name="angle-left" /></button>,
                          arrowRight: <button className='home-button-right'><Icon name="angle-double-right" /></button>,
                          arrowRightDisabled: <button><Icon name="angle-right" /></button>,
                          addArrowClickHandler: true,
                        }
                    }
                ]}
                >
                <HomeParkItem park={props.parks[0]} />
                <HomeParkItem park={props.parks[1]} />
                <HomeParkItem park={props.parks[2]} />
                
                
            </Carousel>
        )

    }

}

export default HomeTrailList