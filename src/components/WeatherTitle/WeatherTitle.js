import React from 'react';
import { weatherConditions } from 'components/WeatherBackground/backgrounds';


const WeatherTitle = ({ weatherCon }) => <div>
                                            <h2>{weatherConditions[weatherCon].title}</h2>
                                            <h2>{weatherConditions[weatherCon].subtitle}</h2>
                                         </div>;

export default WeatherTitle;