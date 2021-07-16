import { RECEIVE_TRAIL, RECEIVE_TRAILS } from "../actions/trail_actions";

const trailsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_TRAILS:
            return action.trails;
        case RECEIVE_TRAIL:
            const newTrail = { [action.trail.id]: action.trail};
            return Object.assign({}, state, newTrail);
        default:
            return state;
    }
}

export default trailsReducer;