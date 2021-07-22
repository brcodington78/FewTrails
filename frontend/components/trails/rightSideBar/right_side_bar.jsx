import React from 'react';
import MyMapComponent from './map';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'
import { googleAPIKey } from '../../../keys/keys.js'
import TrailsList from './trails_list'


const RightSideBar = (props) => {

    
    

    return (
        <div className='right-side-bar-container'>
            
            <div className='map-container'>
            <MyMapComponent
                isMarkerShown={true}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleAPIKey}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                coords={props.coords}
            />
                {/* <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCG5-8hwFBCtU_MiBfKFJwsXJK8zue651o`}
                loadingElement={<div style={{ height: "100%"}} />}
                containerElement={<div style={{ height: "100%"}} />}
                mapElement={<div style={{ height: "100%"}} />}
                /> */}
            </div>
            <TrailsList trails={props.trails} parkName={props.parkName} parkId={props.parkId} pageTrailName={props.pageTrailName}/>
           
        </div>          
    )
}

export default RightSideBar;