import * as APIUtil from '../util/park_api_util'


export const RECEIVE_PARK = 'RECEIVE_PARK'
export const RECEIVE_PARKS = 'RECEIVE_PARKS'

export const receivePark = park => ({
    type: RECEIVE_PARK,
    park
})

export const receiveParks = parks => ({
    type: RECEIVE_PARKS,
    parks
})

export const fetchParks = () => dispatch => (
    APIUtil.fetchParks().then(parks => (
        dispatch(receiveParks(parks))
    ))
)

export const fetchPark = id => dispatch => (
    APIUtil.fetchPark(id).then(park => (
        dispatch(receivePark(park))
    ))
)