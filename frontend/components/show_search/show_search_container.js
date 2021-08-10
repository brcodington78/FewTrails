import {connect} from 'react-redux';
import ShowSearch from './ShowSearch';
import { fetchTrails } from '../../actions/trail_actions';
import { fetchParks } from '../../actions/park_actions';

const mSTP = (state, {match}) => {
    console.log('match',match)
    return {
        trails: state.entities.trails,
        parks: state.entities.parks
    }
}

const mDTP = dispatch => ({
    fetchParks: () => dispatch(fetchParks()),
    fetchTrails: () => dispatch(fetchTrails())

})

export default connect(mSTP, mDTP)(ShowSearch)