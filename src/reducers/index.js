import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import weather from './weather';
import city from './city';
import currentDay from './currentDay';


const rootReducer = combineReducers({weather, city,currentDay, routing });

export default rootReducer;
