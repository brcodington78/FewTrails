import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={SignUpFormContainer} />
      </Switch>
    </div>
  );
  
  export default App;
  