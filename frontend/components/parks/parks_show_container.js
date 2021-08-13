import React from 'react';
import {connect} from 'react-redux';
import ParkShowPage from './parks_show'
import { fetchParks, fetchPark } from '../../actions/park_actions';
import { fetchTrails } from '../../actions/trail_actions';

const filterPark = (parks, id) => {
    for(let i = 0; i < parks.length; i++){
        if (parks[i].id === id) {
            return parks[i]
        }
    }
}

const mSTP = (state, { match }) => {

    

    const parkId = parseInt(match.params.id)
    return {
        parkId,
        park: filterPark(state.entities.parks, parkId),
        parks: state.entities.parks,
        trails: state.entities.trails
    }

}

const mDTP = dispatch => {

    return {
        fetchPark: id => dispatch(fetchPark(id)),
        fetchParks: () => dispatch(fetchParks()),
        fetchTrails: () => dispatch(fetchTrails())

    }
}

export default connect (mSTP, mDTP)(ParkShowPage)