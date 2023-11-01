import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import initialState from './store/initialState';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, initialState);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
<BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider> 
  </React.StrictMode>
);
