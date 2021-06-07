import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar'
import { logout } from '../actions/session_actions'

const mSTP = ({ session, entities: { users }}) => {
    
    console.log(session,'session log')
    return ({
        
        currentUser: users[session.id]
        
    })
}


const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Navbar)