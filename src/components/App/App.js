import React, { Component } from 'react';
import './App.css';
import Home from 'containers/Home/Home'
import Search from 'containers/Search/Search'
import Description from 'containers/Description/Description'
import { BrowserRouter } from 'react-router-dom';
import { Route, NavLink, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from 'store/actions/actions';


class App extends Component {
  state = {
    latitude: '',
    longitude: ''
  }
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
        this.props.onFetchingLocation(position.coords.longitude, position.coords.latitude);
      },
    );
  }
  
    render() {
      return (
        <BrowserRouter>
        <div 
          className="app"        
        >
          <header>
            <ul className="router">
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to="/Search">Search</NavLink></li>
              <li><NavLink to="/Description">Description</NavLink></li>
            </ul>
          </header>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Search' exact component={Search} />
            <Route path='/Description' exact component={Description} />
          </Switch>
          </div>
        </BrowserRouter>
      );
    }
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchingLocation: (lon, lat) => dispatch({type: actionTypes.FETCHING_LOCATION, fetchData: {lon: lon, lat: lat}})
  }
};

export default connect(null, mapDispatchToProps)(App);
