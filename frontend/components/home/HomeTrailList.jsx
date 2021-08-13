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
                      arrowLeft: <button className='home-button-left'><Icon name="angle-double-left" /></button>,
                      arrowLeftDisabled:<button className='home-button-left'><Icon name="angle-left" /></button>,
                      arrowRight: <button id='home-button-right'><Icon name="angle-double-right" /></button>,
                      arrowRightDisabled: <button><Icon name="angle-right" /></button>,
                      addArrowClickHandler: true,
                    }
                }
            ]}
            >
            <HomeTrailItem trail={props.trails[0]} />
            <HomeTrailItem trail={props.trails[1]} />
            <HomeTrailItem trail={props.trails[13]} />
            <HomeTrailItem trail={props.trails[2]} />
            <HomeTrailItem trail={props.trails[11]} />
            <HomeTrailItem trail={props.trails[9]} />
            <HomeTrailItem trail={props.trails[4]} />
            <HomeTrailItem trail={props.trails[10]} />
            
        </Carousel>
    )
}

export default HomeTrailList