import * as APIUtil from '../util/session_api_util'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const createUser = user => dispatch =>{
    APIUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
      ), error => (
        dispatch(receiveErrors(error.responseJSON))
      ))
}

