import * as APIUtil from '../util/trails_api_util'

export const RECEIVE_TRAIL = 'RECEIVE_TRAIL';
export const RECEIVE_TRAILS = 'RECEIVE_TRAILS'


export const receiveTrail = trail => ({
    type: RECEIVE_TRAIL,
    trail: trail
})

export const receiveTrails = trails => ({
    type: RECEIVE_TRAILS,
    trails: trails
})

export const fetchTrail = id => dispatch => (
    APIUtil.fetchTrail(id)
        .then(trail => dispatch(receiveTrail(trail)))
)

