import { createStore, applyMiddleware } from 'redux';
import {routerMiddleware} from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory';
import logger from 'redux-logger';
import rootReducer from './reducers/index';


const defaultState = {
  weather: { isPending: true, dailyForecasts: [{dummyData:"data"}] },
  city: { cityName: "Boca", cityId: "123d" },
  currentDay: function() { 
    return {today: this.weather.dailyForecasts[0]}
  }
};

export const history = createHistory();

const middleware = routerMiddleware(history);

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware(), middleware, logger)(createStore); 

const store = createStoreWithMiddleware(rootReducer, defaultState, /*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/);


export default store;