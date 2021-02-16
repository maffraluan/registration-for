import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Application, Login, SignUp } from './pages'
import './App.css';

function Navigation() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={'/login'} component={Login} />
          <Route path={'/signup'} component={SignUp} />
          <Route path={'/application'} component={Application} />
          <Route path={'*'} component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default Navigation;
