import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import TrailPage from './trails_page'
import TrailsPage from './trails_page';
import { fetchTrail } from '../../actions/trail_actions';
import {fetchPark, fetchParks} from '../../actions/park_actions'



const filterPark = (trail, parks) => {
    console.log('filter', trail, parks)
    for(let i = 0; i < parks.length; i++) {
        console.log('parkId', parks[i].id, 'trail parkID', trail.park_id)
        if(parks[i].id === trail.park_id ) {
            return parks[i]
        } 
    }
    return null
}


const mSTP = (state, { match }) => {
    
    const trailId = parseInt(match.params.id);
    // const trail = fetchTrail(trailId)
    return {
        trailId,
        // params: match.params,
        // trail: trail.repsonseJSON
        trail: state.entities.trails[match.params.id],
        park: filterPark(state.entities.trails[match.params.id], state.entities.parks),
        parks: state.entities.parks
    }

}

const mDTP = dispatch => ({
    fetchTrail: id => dispatch(fetchTrail(id)),
    fetchPark: id => dispatch(fetchPark(id))
})


export default connect(mSTP, mDTP)(TrailsPage)
