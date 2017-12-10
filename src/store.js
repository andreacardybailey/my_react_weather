import { createStore, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer

import rootReducer from './reducers/index';
// import weather data
import sample_city from './sample_city';

const defaultState = {
  city: sample_city,
  currentDay: sampleCity[0]
}

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory);

export default store;