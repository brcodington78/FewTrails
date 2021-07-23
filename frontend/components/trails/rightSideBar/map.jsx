import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'


// function Map(props) {
//     console.log('coords in map',props)
//     return (
//         <>
//             <GoogleMap defaultZoom={10} defaultCenter={{lat: props.coords[0], lng: props.coords[1]}}/>
//         </>
        
//     )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map))

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: props.coords[0], lng: props.coords[1] }}
  >
    
    {props.isMarkerShown && <Marker position={{ lat: props.coords[0], lng: props.coords[1] }} />}
  </GoogleMap>
))


export default MyMapComponent