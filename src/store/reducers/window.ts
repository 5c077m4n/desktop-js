import { WindowActions } from '../actions';

const getInitialState = (): any => ({ windowList: [] });

const windowReducer = (state = getInitialState(), action: any): any => {
	switch (action.type) {
		case WindowActions.WINDOW_OPEN:
			return {
				...state,
				windowList: [
					...state.windowList,
					{
						windowId: action.windowId,
						windowType: action.windowType,
						windowName: action.windowName,
					},
				],
			};
		case WindowActions.WINDOW_FOCUS:
			return { ...state, windowFocusId: action.windowId };
		case WindowActions.WINDOW_CLOSE:
			return {
				...state,
				windowList: state.windowList.filter(({ windowId }) => windowId !== action.windowId),
			};
		default:
			return state;
	}
};

export default windowReducer;
