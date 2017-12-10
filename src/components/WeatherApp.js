import React from 'react';
import '../css/weather-app.css';
import Days from './Days';
import DetailedForecast from './DetailedForecast';

const WeatherApp = (props) => { 
  return (
    <main>
      <Days 
        cityState={ props.match.params.weatherId } 
        data={ props }
      />
      <DetailedForecast currentDay={ props.currentDay } />
    </main>
  )
}

export default WeatherApp;