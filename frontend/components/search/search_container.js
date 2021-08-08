import {connect} from 'react-redux';
import Search from './Search';
import { fetchTrails } from '../../actions/trail_actions';
import { fetchParks } from '../../actions/park_actions';

const mSTP = (state) => {
    return {
        trails: state.entities.trails,
        parks: state.entities.parks
    }
}

const mDTP = dispatch => ({
    fetchParks: () => dispatch(fetchParks()),
    fetchTrails: () => dispatch(fetchTrails())

})

export default connect(mSTP, mDTP)(Search)