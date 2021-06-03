import { RECEIVE_CURRENT_USER } from '../actions/session_actions' 


const usersReducer = (oldState= {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch (action.key) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser});
            return newState
        default:
            oldState;
    }
}

export default usersReducer