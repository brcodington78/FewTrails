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
import TrailsPageContainer from './trails/trails_page_container'
import Home from './home/home'


const App = () => {
  
  return (
    <div className='giant-container'>
      <header >
        <Route path='/' component={NavbarContainer} />
      </header>
      <Switch>
        <AuthRoute exact path="/signup" component={SignupContainer}/>
        <AuthRoute exact path="/login" component={LoginContainer}/>
        <Route path='/trail/:id' component={TrailsPageContainer} />
        <Route exact path='/' component={Home} />
        <Redirect to='/' />      
      </Switch>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCG5-8hwFBCtU_MiBfKFJwsXJK8zue651o&callback=initMap&libraries=&v=weekly" async></script>
    </div>
    )
};
  
  export default App;
  