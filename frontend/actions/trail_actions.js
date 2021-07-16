import * as APIUtil from '../util/trail_api_util'

export const RECEIVE_TRAIL = 'RECEIVE_TRAIL'
export const RECEIVE_TRAILS = 'RECEIVE_TRAILS'

export const receiveTrail = trail => ({
    type: RECEIVE_TRAIL,
    trail
})

export const receiveTrails = trails => ({
    type: RECEIVE_TRAILS,
    trails
})

export const fetchTrails = () => dispatch => (
    APIUtil.fetchTrails().then(trails => (
        dispatch(receiveTrail(trails))
    ))
)

export const fetchTrail = id => dispatch => (
    APIUtil.fetchTrail(id).then(trail => (
        dispatch(receiveTrail(trail))
    ))
)