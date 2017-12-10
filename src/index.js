import React from 'react';
import { render } from 'react-dom';
import { Route, Router } from 'react-router-dom';
import './css/global.css';
import WeatherAppContainer from './components/WeatherAppContainer';
import WeatherFormContainer from './components/WeatherFormContainer';

import { Provider } from 'react-redux'; 
import store, { history } from './store';

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
          <div>
            <Route exact path="/" component={ WeatherFormContainer } />
            <Route path="/weather/:weatherId" component={ WeatherAppContainer } />
          </div>
      </Router>
    </Provider>
  )
}

render( <Root />, document.querySelector('#app') );