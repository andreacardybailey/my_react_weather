import React from 'react';
import '../css/weather-app.css';
import Days from './Days';
import DetailedForecast from './DetailedForecast';

class WeatherApp extends React.Component {
  componentWillMount() {
    let key = this.props.city.cityId;
    this.props.getWeather(key);
    console.log('mounting...');
  }
  render(){
    if(this.props.weather.length < 2){
      return null;
    }
    else {
      return (
        <main>
          <Days 
            city={ this.props.city.cityName } 
            data={ this.props.weather }
            currentDay={ this.props.currentDay }
            getSelectedDay = { this.props.getSelectedDay}
          />
          <DetailedForecast 
            city={this.props.city.cityName}
            currentDay={ this.props.currentDay } 
          />
        </main>
      )
    }
  }
}

export default WeatherApp;