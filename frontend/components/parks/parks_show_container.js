import React from 'react';
import {connect} from 'react-redux';
import ParkShowPage from './parks_show'
import { fetchParks, fetchPark } from '../../util/park_api_util';
import { fetchTrails } from '../../actions/trail_actions';


const mSTP = (state, { match }) => {

    const parkId = parseInt(match.params.id)
    return {
        parkId,
        park: state.entities.parks[parkId - 1],
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