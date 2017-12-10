import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import city from './city';
import currentDay from './currentDay';


const rootReducer = combineReducers({city, currentDay, routing });

export default rootReducer;