import { connect } from 'react-redux'
import React from 'react';
import Home from './home'
import { fetchTrails } from '../../actions/trail_actions';
import { fetchPark, fetchParks } from '../../actions/park_actions';

const mSTP = (state) => {
    console.log('home container is hitting')
    return {
        trails: state.entities.trails,
        parks: state.entities.parks
    }
}

const mDTP = dispatch => ({
    fetchParks: () => dispatch(fetchParks()),
    fetchPark: id => dispatch(fetchPark(id)),
    fetchTrails: () => dispatch(fetchTrails())
})

export default connect(mSTP, mDTP)(Home)