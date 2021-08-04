import React from 'react';
import { Link } from "react-router-dom";
import MyMapComponent from '../trails/rightSideBar/map'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'
import { googleAPIKey } from '../../keys/keys'
import Carousel2 from './carousel2'




class ParkShowPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trails: null
        }
        
    }

    
    componentDidMount() {

        let {fetchParks, fetchTrails, fetchPark, parkId, trails} = this.props
        fetchPark(parkId)
        .then(() => 
            fetchTrails()
            .then((data) => {
                let trailFilter = (trails, parkId) => {
                    
                    let filteredTrails = []
                    trails.forEach(trail => {
                        if(trail.park_id === parkId){
                            filteredTrails.push(trail)
                        }
                    })
                    return filteredTrails
                } 
                
                this.setState({trails: trailFilter(data.trails, parkId)});
            })
        ) 
        
    }

    

    render() {
        
        const {trails} = this.state;
        const {park} = this.props
        
        if (!trails || !park) {
            return (
                <div>Loading...</div>
            )
        }else {
            let {us_state, name, photos, coords} = this.props.park
            return (
                <div className='park-show-container'>
                    <div className='show-page-top'>
                        <p className='location-path'>{`United States of America > ${us_state} > ${name}`}</p>
                        {/* <SearchBar /> */}
                    </div>
                    <div className='picture-carousel'>
                        {/* <Carousel photos={photos}/> */}
                        <Carousel2 photos={photos}/>
                    </div>
                    <div className='middle-park-show'>
                        <h1 className='park-header'>{`Best trails in ${park.name},`}</h1>
                        <h1 className='park-header'>{park.us_state}</h1>
                        {/* <Reviews /> */}
                        <p className='park-description'>{park.description1}</p>
                        <MyMapComponent
                            isMarkerShown={true}
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleAPIKey}`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            coords={park.coords}
                            zoom={10}
                        />
                        <div className='buttons-park'>

                            <a className='direction-link-park' href={`https://www.google.com/maps/dir/Current+Location/${coords[0]},${coords[1]}?ref=trail-action-menu-directions`}>
                                <div className='directions-icon2'>
                                    <img className='directions-pic' src='https://cdn-assets.alltrails.com/assets/packs/media/Green-Variant/directions-green-ed305b8c.png'/>
                                </div>
                                <div className='directions-text-park'>Directions</div>
                            </a>
                        </div> 
                    </div>
                </div>
            )
        }
    }
}

export default ParkShowPage;