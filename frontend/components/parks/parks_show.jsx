import React from 'react';
import { Link } from "react-router-dom"


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
                    console.log('filtered', filteredTrails)
                    return filteredTrails
                } 
                
                this.setState({trails: trailFilter(data.trails, parkId)});
                console.log('state trails', this.state.trails)
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
            console.log('park', park)
            let {us_state, name} = this.props.park
            return (
                <div className='parkShowContainer'>
                    <p className='location-path'>{`United States of America > ${us_state} > ${name}`}</p>
                    {/* <SearchBar /> */}
                </div>
            )
        }
    }
}

export default ParkShowPage;