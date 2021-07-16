import * as APIUtil from '../util/trail_api_util'
import { RECEIVE_TRAIL } from './trail_actions'

export const RECEIVE_PARK = 'RECEIVE_PARK'
export const RECEIVE_PARKS = 'RECEIVE_PARKS'

export const receive_park = park => ({
    type: RECEIVE_PARK,
    park
})