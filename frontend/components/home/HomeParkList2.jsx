import React from 'react'
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import Icon from 'react-fa';
import '@brainhubeu/react-carousel/lib/style.css';
import HomeParkItem from './HomeParkItem'
import { render } from 'react-dom';

class HomeTrailList extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     counter: 0
        // }
        
    }
    
    

    componentDidUpdate() {
        
        if(this.props.parks) {
            document.getElementById('home-button-right').click()
            document.getElementById('home-button-right2').click()
            
        }



    }
    

    render() {
        
        let {parks} = this.props
        if (!parks) {
            return null
        } else {
            return (
                <>
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
                              arrowRight: <button id='home-button-right2'><Icon name="angle-double-right" /></button>,
                              arrowRightDisabled: <button><Icon name="angle-right" /></button>,
                              addArrowClickHandler: true,
                            }
                        }
                    ]}
                    >
                    <HomeParkItem park={parks[0]} />
                    <HomeParkItem park={parks[1]} />
                    <HomeParkItem park={parks[2]} />
                    <HomeParkItem park={parks[3]} />
                    
                    
                </Carousel>
                
                </>
            )
    
        }

    }


}

export default HomeTrailList