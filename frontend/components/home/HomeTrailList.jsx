import React from 'react'
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import Icon from 'react-fa';
import '@brainhubeu/react-carousel/lib/style.css';
import HomeTrailItem from './HomeTrailItem'


const HomeTrailList = (props) => {
    return (
        <Carousel
            plugins={[
                'infinite',
                {
                resolve: slidesToShowPlugin,
                options: {
                numberOfSlides: 4
                }
                },
                {
                    resolve: arrowsPlugin,
                    options: {
                      arrowLeft: <button><Icon name="angle-double-left" /></button>,
                      arrowLeftDisabled:<button><Icon name="angle-left" /></button>,
                      arrowRight: <button><Icon name="angle-double-right" /></button>,
                      arrowRightDisabled: <button><Icon name="angle-right" /></button>,
                      addArrowClickHandler: true,
                    }
                }
            ]}
            >
            <HomeTrailItem trail={props.trails[0]} />
            <HomeTrailItem trail={props.trails[0]} />
            <HomeTrailItem trail={props.trails[0]} />
            <HomeTrailItem trail={props.trails[0]} />
            <HomeTrailItem trail={props.trails[0]} />
            
        </Carousel>
    )
}

export default HomeTrailList