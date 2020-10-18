import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {compact} from 'lodash';
import {persistStore, persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';
import FilesystemStorage from 'redux-persist-filesystem-storage';
import {reducers} from '../reducers';

const config = {
  key: 'LIFTED_REDUX_STORE',
  storage: FilesystemStorage,
  // whitelist: ['AppReducer', 'UserReducer', 'LocationReducer'],
  whitelist: ['AppReducer'],
};

const persistedReducer = persistReducer(config, reducers);
const middleware = compact([thunk, __DEV__ ? createLogger() : null]);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware),
);

export const persistor = persistStore(store);
