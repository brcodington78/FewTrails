import { RECEIVE_Park, RECEIVE_PARKS } from "../actions/park_actions";

const parksReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_PARKS:
            return action.parks;
        case RECEIVE_PARK: 
            const newPark = { [action.park.id]: action.park};
            return Object.assign({}, state, newPark);
        default:
            return state;
    }
}

export default parksReducer'