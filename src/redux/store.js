import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { reducer as searchReducer, reduxSearch } from 'redux-search'

import rootReducer from './reducers/root.js';
import middlewares from './middleware/index.js';
import { localStorageKey } from '../constants.js';

import thunk from 'redux-thunk'



const composerFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getLocalStorageState = () => {
    const cache = localStorage.getItem(localStorageKey);
    return cache ? JSON.parse(cache) : {};
}

// export default createStore(
//     rootReducer,
//     getLocalStorageState(),
//     composerFunction(middlewares),
// );



export default () =>  {
  const finalCreateStore = compose(
    applyMiddleware(thunk),

    reduxSearch({
      resourceIndexes: {
        map: ['name', 'title'],
        immutableMap: ['name', 'title']
      },
      resourceSelector: (resourceName, state) => {
        return state.resources.get(resourceName)
      }
    }),
    // getLocalStorageState(),
    composerFunction(middlewares),

  )(createStore)

  return finalCreateStore(rootReducer)
}


  