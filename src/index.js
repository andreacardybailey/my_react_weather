import React from 'react';
import { render } from 'react-dom';
import { Route, Router } from 'react-router-dom';
import './css/global.css';
import WeatherForm from './components/WeatherForm';
import App from './components/App';

import { Provider } from 'react-redux'; 
import store, { history } from './store';

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
          <div>
            <Route exact path="/" component={ WeatherForm } />
            <Route path="/weather/:weatherId" component={ App } />
          </div>
      </Router>
    </Provider>
  )
}

render( <Root />, document.querySelector('#app') );