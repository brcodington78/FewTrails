import React from 'react'

const ImageSlide = ({url}) => {
    console.log('url',url)
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px',
        width: '500px'
    }

    return (
        <div className="image-slide" style={styles}></div>
    );
}

export default ImageSlide 