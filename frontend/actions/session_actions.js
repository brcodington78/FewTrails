import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'


export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})


export const login = user => dispatch => (
  APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    error => (dispatch(receiveErrors(error.responseJSON))))

)


export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (
      dispatch(receiveCurrentUser(user))
    ), error => (
      dispatch(receiveErrors(error.responseJSON))
    ))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
)