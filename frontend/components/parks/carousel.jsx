import React from 'react'
import ImageSlide from './image_slide'

class Carousel extends React.Component  {

    constructor(props) {
        super(props)

        this.state ={ 
            currentImageIndex: 0
        }
    }

    previousSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
      }

    nextSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
    });
    
    render () {
        return(
            <div className='carousel'>
                <Arrow
                    direction="left"
                    clickFunction={ this.previousSlide }
                    glyph="&#9664;" />
                <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />

                {/* {props.photos.map(photo, index => {
                    return (
                        <ImageSlide photoUrl={photo.photoUrl}/>
                    )
                })} */}
                <Arrow
                    direction="right"
                    clickFunction={ this.nextSlide }
                    glyph="&#9654;" />
          </div>
        )
    }

        

    
    

    
}

export default Carousel