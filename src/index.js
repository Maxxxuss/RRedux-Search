import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app.jsx';
// import store from './redux/store.js';
import createAppStore from './redux/store.js';

import SearchApp from './components/search/searchApp'

import './index.css';

const store = createAppStore()


ReactDOM.render(
    <Provider store={store}>
        <App />
        {/* <SearchApp/> */}
    </Provider>,
    document.getElementById('root')
);
