import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import WeatherTemperature from 'components/WeatherTemperature/WeatherTemperature';
import CityName from 'components/CityName/CityName';
import WeatherTitle from 'components/WeatherTitle/WeatherTitle';
import * as actionTypes from 'store/actions/actions';

class Home extends Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: 'Mist',
    cityName: 'Brody',
  }
  
  fetchWeather = (latitude = 25, longitude = 50) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${weatherApiKey}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: false,
          cityName: json.name
        })
        this.props.onFetchingWeather(json.main.temp, json.weather[0].main, json.name);
    })
  }

  findWeather = e => {
    this.fetchWeather(this.props.lat, this.props.lon);
  }

  render() {
    return (
      <div>
        <div>
          <div className="fake">
            <button
              onClick={this.findWeather}
              className="w-100 btn btn-success"
            > Подивитись погоду в свому місті </button>
          </div>
        <div>
          <WeatherTemperature temp={this.props.temp} />
          <CityName cityName={this.props.cityName} />
        </div>
        <WeatherTitle weatherCon={this.props.weatherCon} />
        </div>
      </div>
    );
  }
}

const weatherApiKey = '7b15642bdaa56553c2d8950d6031fc4b';

const mapStateToProps = state => {
  return {
      temp: state.temp,
      weatherCon: state.weatherCon,
      cityName: state.cityName,
      lon: state.lon,
      lat: state.lat
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchingWeather: (temp, weatherCon, cityName) => dispatch({type: actionTypes.FETCHING_WEATHER, fetchData: {temp: temp, weatherCon: weatherCon, cityName: cityName}})
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);