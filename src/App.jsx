import React from 'react';
import './App.css';
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Admin from './pages/Admin/admin';
import Public from './routes/Public';
import Login from "./pages/Login/Login";
import Private from './routes/Private';
import Foods from './pages/Foods/Foods'
import NationalFood from './pages/NationalFood/NationalFood';
const App = () => {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/food' component={Foods} />
          <Route exact path='/nationalfood' component={NationalFood} />
            <Public path="/login" component={Login} />
            <Private path="/admin" component={Admin}/>
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
