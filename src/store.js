import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

import rootReducer from './reducers/index';
import sample_city from './sample-city';

// Create a browser history
export const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const defaultState = {
  city: sample_city,
  currentDay: sample_city[0]
}

const store = createStore(rootReducer, defaultState, applyMiddleware(middleware));

export default store;