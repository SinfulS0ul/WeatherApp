import React, { Component } from 'react';
import SearchMenu from 'components/SearchMenu/SearchMenu';
import { connect } from 'react-redux';
import WeatherTemperature from 'components/WeatherTemperature/WeatherTemperature';
import CityName from 'components/CityName/CityName';
import WeatherTitle from 'components/WeatherTitle/WeatherTitle';

class Search extends Component {
    render() {
      return (
        <div>
          <SearchMenu />
          <WeatherTemperature temp={this.props.temp} />
          <CityName cityName={this.props.cityName} />
          <WeatherTitle weatherCon={this.props.weatherCon} />
        </div>
      );
    }
}

const mapStateToProps = state => {
  return {
      temp: state.temp,
      weatherCon: state.weatherCon,
      cityName: state.cityName
  };
};

export default connect(mapStateToProps)(Search);