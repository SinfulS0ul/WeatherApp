import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from 'store/actions/actions';
import './SearchMenu.css';

class SearchMenu extends Component {

  state = {
    newCityName: '',
    countryCode: '',
    inputText: '',

  }

  fetchWeatherByCity = (cityName='Ternopil', countryCode='ua') => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&APPID=${weatherApiKey}&units=metric`
    ).then(res => res.json())
     .then(json=>{
       console.log(json);
      this.props.onFetchingWeather(json.main.temp, json.weather[0].main, cityName)
    });
  }

  findWeather = e => {
    e.preventDefault();
    this.changeWeather();
  }

  changeWeather = () => {
    const loc = this.state.inputText.trim().toLowerCase().split(',');
    this.setState({newCityName: loc[0], countryCode: loc[1]});
    this.fetchWeatherByCity(loc[0], loc[1]);
  }

  handleInput = e => {
    const newText = e.target.value;
    this.setState({inputText: newText});
  }

    render() {
      return (
        <div className="form">
          <p className="d-flex flex-column align-items-center">Введіть назву міста та код країни</p>
          <form 
            className="d-flex flex-column align-items-center"
            onSubmit={this.findWeather}
          >
            <input 
              autoComplete="off"
              name="taskText"
              placeholder="Ternopil,ua" 
              onChange={this.handleInput}
              className="w-100"
            />
              <button
                type="submit"
                className="w-100 btn btn-success"
              > Знайти </button>
          </form>
        </div>
      );
    }
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchingWeather: (temp, weatherCon, cityName) => dispatch({type: actionTypes.FETCHING_WEATHER, fetchData: {temp: temp, weatherCon: weatherCon, cityName: cityName}})
  }
};

const weatherApiKey = '7b15642bdaa56553c2d8950d6031fc4b';

export default connect(null, mapDispatchToProps)(SearchMenu);
