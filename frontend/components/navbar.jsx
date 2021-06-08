import { connect } from 'react-redux';
import {logout} from '../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';
//You will have to make these buttons link to login and sign up pages probably using Link

const UserButtons = props =>  {
    const SessionLinks = () => (
        <div className='nav-buttons'>
            <Link to='/signup' className='signup-button'>Sign Up</Link>
            <Link to='/login' className='login-button'>Log In</Link>
            
        </div>
    )

    //will add more to the user dropdown, will change from logout
    const UserDropDown = () => (
        <div className='user-dropdown'> 
            <button className="header-button" onClick={props.logout}>Logout</button>
        </div>
    )

    return props.currentUser ? UserDropDown() : SessionLinks();
    //code for differentiating accessible buttons on signup and login page
    
    // if (props.location === '/signup' ) {
    //     return (
    //         <div className='nav-buttons'>
    //             <Link to='/login' className='login-button'>Login</Link>
                
    //         </div>
    //     )
    // } else if (props.location === '/login') {
    //     return (
    //         <div className='nav-buttons'>
    //             <Link to='/signup' className='signup-button'>Sign Up</Link>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className='nav-buttons'>
    //             <Link to='/login' className='login-button'>Login</Link>
    //             <Link to='/signup' className='signup-button'>Sign Up</Link>
    //         </div>
            
    //     )
    // }

    
    
}



class Navbar extends React.Component {
    constructor(props) {
        super(props)
        
    }
    
    
    //When logged show profile picture dropdown in place of the userbuttons.

    // const ProfileDropdown = ({currentUser, logout}) => {


    // }
    
    render() {
        
        return (
        <div className='navbar'>
            <ul className='other-nav-options'>
                <li className='explore'>Explore</li>
                <li className= 'plan'>Plan</li>
                <li className='history'>History</li>

            </ul>
            <Link to='/' className='header-bar'>
                <div className='center-nav'>
                
                    <img src='https://i.imgur.com/akcuC2s.png' alt='FewTrails Logo' />
                
                
                </div>
            </Link>
            
            <UserButtons location = {this.props.location.pathname} currentUser= {this.props.currentUser} logout={this.props.logout}/>
        </div>
    )}
    
}



export default Navbar