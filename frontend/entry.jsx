import React from 'react';
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from './store/store'
import {login, logout} from './actions/session_actions'
import {createUser} from './actions/user_actions'



document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = undefined;
    console.log(window.currentUser)
    if (window.currentUser ) {
        preloadedState = {session: {id: window.currentUser.id},
        entities: {
            users: { [window.currentUser.id]: window.currentUser}
        }
    }
    }
    const store = configureStore(preloadedState)
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.createUser = createUser;
    window.logout  = logout
    window.login = login
    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store}/>, root)
})


