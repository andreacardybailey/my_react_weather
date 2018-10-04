import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import WeatherApp from './WeatherApp';

const mapStateToProps = (state) => {
  return {
    weather: state.weather.dailyForecasts,
    city: state.city,
    currentDay: state.currentDay()
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

const WeatherAppContainer = connect(mapStateToProps, mapDispatchToProps)(WeatherApp);

export default WeatherAppContainer;