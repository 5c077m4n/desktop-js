import { combineReducers } from 'redux';

import windowReducer from './window';

export const rootReducer = combineReducers({ windowReducer });

export default rootReducer;
