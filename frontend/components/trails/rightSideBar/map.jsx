import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'


function Map(props) {
    console.log('coords in map',props)
    return (
        <>
            <GoogleMap defaultZoom={10} defaultCenter={{lat: props.coords[0], lng: props.coords[1]}}/>
        </>
        
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))


export default WrappedMap