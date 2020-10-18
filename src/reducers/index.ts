import {combineReducers} from 'redux';
import {AppAction} from '../actions';
import {appReducer} from './appReducer';

export interface StoreState {
  // appReducer: AppAction;
}

export const reducers = combineReducers<StoreState>({
  appReducer,
});
