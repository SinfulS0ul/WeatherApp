import * as actionTypes from 'store/actions/actions';

const initialState = {
  temp: 0,
  weatherCon: 'Mist',
  cityName: 'Brody',
  lon: 25,
  lat: 50
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCHING_WEATHER:
        return{
          ...state,
          temp: action.fetchData.temp,
          weatherCon: action.fetchData.weatherCon,
          cityName: action.fetchData.cityName
        }
        case actionTypes.FETCHING_LOCATION:
        return{
          ...state,
          lon: action.fetchData.lon,
          lat: action.fetchData.lat,
        }
        default:
          return state;
    }
};

export default reducer;