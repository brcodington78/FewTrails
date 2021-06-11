import * as APIUtil from '../util/parks_api_util'

export const RECEIVE_PARK = 'RECEIVE_PARK'
export const RECEIVE_PARKS = 'RECEIVE_PARKS'


export const receivePark = park => ({
    type: RECEIVE_PARK,
    park: park
})

export const receiveParks = parks => ({
    type: RECEIVE_PARKS,
    parks: parks
})

export const fetchPark = id => dispatch => {
    console.log(id, 'fetchPark action')
    return (APIUtil.fetchPark(id)
        .then(park => dispatch(receivePark(park))))
}



