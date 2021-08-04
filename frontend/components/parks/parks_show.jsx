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
            let {us_state, name, photos} = this.props.park
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
                        <h1>{`Trails in ${park.name}, ${us_state}`}</h1>
                        {/* <Reviews /> */}
                        <p>{park.description1}</p>
                        <MyMapComponent
                            isMarkerShown={true}
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleAPIKey}`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            coords={park.coords}
                            zoom={10}
                        />
                        <div className='buttons'>
                            <div className='direction-button'>

                            </div>
                        </div> 
                    </div>
                </div>
            )
        }
    }
}

export default ParkShowPage;