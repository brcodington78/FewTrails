import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavbarContainer from './navbar_container';
import SessionForm from './session_form'
import LoginContainer from './login_form_container'
import SignupContainer from './signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => {
  
  return (
    <div>
      <header>
        <Route path='/' component={NavbarContainer} />
      </header>
      <Switch>
        <AuthRoute exact path="/signup" component={SignupContainer}/>
        <AuthRoute exact path="/login" component={LoginContainer}/>
        <Redirect to='/' />      
      </Switch>
    </div>
    )
};
  
  export default App;
  