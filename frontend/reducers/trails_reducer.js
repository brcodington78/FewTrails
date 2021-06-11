import { RECEIVE_TRAIL } from '../actions/trails_actions'

const trailsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_TRAIL:
            const newTrail = { [action.trail.id]: action.trail};
            return Object.assign({}, oldState, newTrail)
        default: 
            return oldState;
    }
}

export default trailsReducer