import React from 'react'

const ImageSlide = (props) => {
    const styles = {
        backgroundImage: `url(${props.photoUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div className="image-slide" style={styles}></div>
    );
}

export default ImageSlide 