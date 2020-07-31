import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/rootReducer';
// import * as middlewares from './middlewares';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = initialState => {
  const store = createStore(
    reducer,
    initialState,
    storeEnhancers(
      applyMiddleware(
        thunk
      )
    )
  );
  return store;
};

export default configureStore();
