import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Count from './views/Count';
import DisplayCount from './views/DisplayCount';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App>
      <BrowserRouter>
        <Route path="/count" component={Count} />
        <Route path="/display" component={DisplayCount} />
      </BrowserRouter>
    </App>
  </Provider>,
  document.getElementById('root')
);
