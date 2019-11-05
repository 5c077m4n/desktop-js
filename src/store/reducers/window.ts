import { WindowActions } from '../actions';

const getInitialState = (): any => ({ name: 'terminal' });

const windowReducer = (state = getInitialState(), action: any): any => {
	switch (action.type) {
		case WindowActions.WINDOW_OPEN:
			return {
				...state,
				windowId: action.windowId,
				windowType: action.windowType,
				windowName: action.windowName,
			};
		default:
			return state;
	}
};

export default windowReducer;
