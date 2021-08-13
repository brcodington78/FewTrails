import { RECEIVE_PARK, RECEIVE_PARKS } from "../actions/park_actions";

const parksReducer = (state = [], action) => {
    Object.freeze(state)
    let newState = [...state]
    switch(action.type) {
        case RECEIVE_PARKS:
            return action.parks;
        case RECEIVE_PARK: 
            const newPark =  action.park;
            newState.push(newPark)
            return newState;
        default:
            return state;
    }
}

export default parksReducer;