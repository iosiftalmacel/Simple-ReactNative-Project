import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import ReduxThunk from 'redux-thunk';

import logger from 'redux-logger'
import reducer from './reducers/CombinedReducer';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger, apiMiddleware)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
