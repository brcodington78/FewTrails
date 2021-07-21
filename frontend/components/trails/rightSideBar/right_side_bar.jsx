import React from 'react';
import WrappedMap from './map';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'


const RightSideBar = (props) => {

    
    

    return (
        <div className='right-side-bar-container'>
            <h3>My Map</h3>
            <div style={{ width: "100vw", height: "100vh"}}>

                <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCG5-8hwFBCtU_MiBfKFJwsXJK8zue651o`}
                loadingElement={<div style={{ height: "100%"}} />}
                containerElement={<div style={{ height: "100%"}} />}
                mapElement={<div style={{ height: "100%"}} />}
                />
            </div>
            {/* <TrailsList parkId={props.parkId}/> */}
           
        </div>          
    )
}

export default RightSideBar;