import { RECEIVE_PARK } from '../actions/park_actions'

const parksReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_PARK:
            const newPark = { [action.park.id]: action.park};
            return Object.assign({}, oldState, newPark)
        default:
            return oldState
    }
}

export default parksReducer