import { connect } from 'react-redux';
import React from 'react';
import TrailsPage from './trails_page';
import { fetchTrail, fetchTrails } from '../../actions/trail_actions';
import {fetchPark, fetchParks} from '../../actions/park_actions'




// const filterPark = (trail, parks) => {
//     console.log('filter', trail, parks)
//     for(let i = 0; i < parks.length; i++) {
//         console.log('parkId', parks[i].id, 'trail parkID', trail.park_id)
//         if(parks[i].id === trail.park_id ) {
//             return parks[i]
//         } 
//     }
//     return null
// }
const filterTrail = (trails, id) => {
    for(let i = 0; i < trails.length; i++){
        if (trails[i].id === id) {
            return trails[i]
        }
    }
}


const mSTP = (state, { match }) => {
    
    const trailId = parseInt(match.params.id);
    const trail = filterTrail(state.entities.trails, trailId)
    console.log('trail', trail)
    
    let park;
    if (trail) {
        park = filterTrail(state.entities.parks, trail.park_id)

    }
    return {
        trailId,
        trail: trail,
        trails: state.entities.trails,
        parks: state.entities.parks,
        park: park
    }

}

const mDTP = dispatch => ({
    fetchTrail: id => dispatch(fetchTrail(id)),
    fetchPark: id => dispatch(fetchPark(id)),
    fetchTrails: () => dispatch(fetchTrails()),
    fetchParks: () => dispatch(fetchParks())
})


export default connect(mSTP, mDTP)(TrailsPage)
