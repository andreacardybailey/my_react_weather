import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import WeatherApp from './WeatherApp';

// creates this.props.city, this.props.currentDay
function mapStateToProps(state) {
  return {
    city: state.city,
    currentDay: state.currentDay
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}



const App = connect(mapStateToProps, mapDispatchToProps)(WeatherApp); 

export default App;