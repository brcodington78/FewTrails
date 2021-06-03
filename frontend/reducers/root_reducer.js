import {combineReducers} from 'redux'

import entitiesReducers from './entities_reducer';
import errorsReducer from './errors_reducer'
import sessionReducer from './session_errors_reducer'


const rootReducer = combineReducers({
    entities: entitiesReducers,
    session: sessionReducer,
    errors: errorsReducer,

})

export default rootReducer