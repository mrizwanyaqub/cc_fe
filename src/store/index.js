import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import connectRootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

const mWare = [ReduxThunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRootReducer(),
  composeEnhancers(applyMiddleware(...mWare))
);

export const persistor = persistStore(store);

export default store;
