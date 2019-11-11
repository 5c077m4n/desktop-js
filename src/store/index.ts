import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './reducers';

export const configureStore = (preloadedState: Partial<any>) =>
	createStore(
		rootReducer,
		preloadedState,
		composeWithDevTools(applyMiddleware(thunk))
	);
