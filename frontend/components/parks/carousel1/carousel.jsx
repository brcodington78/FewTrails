import React from 'react'
import ImageSlide from './image_slide'
import Arrow from './arrow'


class Carousel extends React.Component  {

    constructor(props) {
        super(props)

        this.state ={ 
            currentImageIndex: 0
        }
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    previousSlide () {
        console.log('previousSlide hitting')
        const lastIndex = this.props.photos.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
      }

    nextSlide () {
        console.log('nextSlide hitting')
        const lastIndex = this.props.photos.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
    }
    
    render () {
        console.log('carousel render', this.props)
        return(
            <div className='carousel'>
                <Arrow
                    direction="left"
                    clickFunction={ this.previousSlide }
                    glyph="&#9664;" />
                <ImageSlide url={ this.props.photos[this.state.currentImageIndex].photoUrl } />
                <Arrow
                    direction="right"
                    clickFunction={ this.nextSlide }
                    glyph="&#9654;" />
          </div>
        );
    };

        

    
    

    
}

export default Carousel